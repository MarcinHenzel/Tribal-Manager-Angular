import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable, MatSort } from '@angular/material';
export interface Village {
  village: string;
  amount: number;
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
    return this.dataSource.data.map((t: Village) => t.amount).reduce((acc, value) => acc + value, 0);
  }
  openFile = (event) => {
    this.dataSource.data = [];
    for (const file of event.target.files) {
      const reader = new FileReader();
      reader.onload = () => {
        this.applyData(this.scrapeData(reader.result));
      };
      reader.readAsText(file);
    }
  }

  scrapeData(text) {
    return Array.from(text.matchAll(/\[coord\](.*?)\[\/coord\] -->/g)).map((table) => {
      return table[1];
    });
  }
  applyData(villageTable) {
    villageTable.forEach((xy) => {
      const found: any = this.dataSource.data.find((ans: Village) => ans.village === xy);
      if (found) {
        found.amount++;
      } else {
        this.dataSource.data.push({ village: xy, amount: 1 });
      }
    });
    this.dataSource.data = this.dataSource.data;
  }

}
