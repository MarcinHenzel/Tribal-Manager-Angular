import { Component, OnInit, ElementRef, Input, Output, EventEmitter, HostListener, Inject } from '@angular/core';
import { AnswerTableComponent } from '../answer-table/answer-table.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-import-modal',
  templateUrl: './import-modal.component.html',
  styleUrls: ['./import-modal.component.scss']
})
export class ImportModalComponent implements OnInit {
  coordInput: string = null;
  constructor(private dialogRef: MatDialogRef<AnswerTableComponent>, @Inject(MAT_DIALOG_DATA) public dataHost: any) { }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
  closeAndSave() {
    this.dialogRef.close(this.dataToArray(this.coordInput));
  }
  dataToArray(data) {
    if(data === null) return []
    const arr: object[] = [];
    const rows = data.split('\n');
    for (let i = 0; i < rows.length; i++) {
      const index = rows[i].split(' ');
      if (index.length > 2) {
        const offs = index.pop();
        let str = '';
        index.forEach(element => {
          str += `${element} `;
        });
        index.length = 0;
        index.push(str);
        index.push(offs);
      }
      arr.push({
        col1: index[0],
        col2: index[1],
        id: i
      });
    }
    return arr;
  }
}

