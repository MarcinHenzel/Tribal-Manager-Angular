import { AnswerTableComponent } from './../answer-table/answer-table.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-export-modal',
  templateUrl: './export-modal.component.html',
  styleUrls: ['./export-modal.component.scss']
})
export class ExportModalComponent implements OnInit {
  ansString = '';
  constructor(private dialogRef: MatDialogRef<AnswerTableComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.ansString = this.toString(this.data);
  }
  close() {

    this.dialogRef.close();
  }
  toString(data): string {
    let ans = '';
    data.forEach(orders => {
      ans += `${orders.player}\r`;
      ans += this.targetsToReducedStr(orders);
    })
    return ans;
  }
  targetsToReducedStr(order): string {
    const orderClone = JSON.parse(JSON.stringify(order));
    let str: string = '';
    for (let j = 0; j < orderClone.targets.length; j++) {
      const xy = orderClone.targets[j];
      let removeCounter = 0;
      for (let i = 0; i < orderClone.targets.length; i++) {
        if (orderClone.targets[i] === xy) {
          orderClone.targets.splice(i, 1);
          removeCounter++;
          i--;
          j--;
        }
      }
      if (xy === undefined) { continue; }
      str += `${xy} x${removeCounter}\r`;

    }
    return str;
  }
}
