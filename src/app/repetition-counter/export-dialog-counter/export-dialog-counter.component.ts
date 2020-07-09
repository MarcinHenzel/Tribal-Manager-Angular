import { RepetitionCounterComponent } from './../repetition-counter.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-export-dialog-counter',
  templateUrl: './export-dialog-counter.component.html',
  styleUrls: ['./export-dialog-counter.component.scss']
})
export class ExportDialogCounterComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<RepetitionCounterComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data);
  }
  close() {
    this.dialogRef.close();
  }
  copy(container) {
    console.log(this.data);
    this.copyToClipboard(this.dataToString(this.data.data));
  }
  dataToString(data: any[]): string {
    return data.reduce((acc, obj) => {
      return acc += `${obj.village} ${obj.amount}\n`;
    }, '');
  }
  copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.textContent = text;
    textarea.style.position = 'fixed';  // Prevent scrolling to bottom of page in MS Edge.
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand('copy');  // Security exception may be thrown by some browsers.
    } catch (ex) {
      console.warn('Copy to clipboard failed.', ex);
      return false;
    } finally {
      document.body.removeChild(textarea);
    }

  }
}
