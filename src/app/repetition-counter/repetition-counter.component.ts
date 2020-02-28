import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable, MatSort } from '@angular/material';
export interface Village {
  village: string;
  amount: any;
}
export interface Raport {
  attacked: string;
  attackers: string[];
}
@Component({
  selector: 'app-repetition-counter',
  templateUrl: './repetition-counter.component.html',
  styleUrls: ['./repetition-counter.component.scss']
})

export class RepetitionCounterComponent implements OnInit {
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  displayedColumns: string[] = ['village', 'amount'];
  dataSource = new MatTableDataSource();
  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getTotalAmount() {
    console.log(this.dataSource.data);
    return this.dataSource.data.map((t: Village) => t.amount).reduce((acc, value) => {
      if (typeof value === 'string') {
        return ++acc;
      } else {
        return acc + value;
      }
    }, 0);
  }
  openFile = (event) => {
    this.dataSource.data = [];
    for (const file of event.target.files) {
      const reader = new FileReader();
      reader.onload = () => {
        this.dataSource.data = this.applyData(this.scrapeData(reader.result));
      };
      reader.readAsText(file);
    }
  }

  scrapeData(text) {
    const raports: Raport[] = [];
    const splitTexts = text.split('[b]Wioska');
    splitTexts.shift();

    splitTexts.forEach((splitText) => {
      const attackers = this.getAttackers(splitText);
      const attacked = splitText.match(/[0-9]{3}\|[0-9]{3}/)[0];
      raports.push({ attacked, attackers });
    });
    return { allAttackers: this.getAttackers(text), raports };
  }
  getAttackers = (text): string[] => {
    return Array.from(text.matchAll(/\[coord\](.*?)\[\/coord\] -->/g)).map((table) => {
      return table[1];
    });
  }
  applyData(villageTable: { allAttackers: string[], raports: Raport[] }) {
    const findSingleTargetOfAttacker = (attacker) => {
      villageTable.raports.forEach(raport => {
        const attacked = raport.attacked;
        if (attacker.amount === 1) {
          if (raport.attackers.find(attackerXY => attackerXY === attacker.village)) {
            attacker.amount = attacked;
            return attacker;
          }
        }
      })
    }
    villageTable.allAttackers.forEach((xy) => {
      const found: any = this.dataSource.data.find((ans: Village) => ans.village === xy);
      if (found) {
        found.amount++;
      } else {
        this.dataSource.data.push({ village: xy, amount: 1 });
      }
    });
    this.dataSource.data.map(findSingleTargetOfAttacker)

    return this.dataSource.data;
  }

}
