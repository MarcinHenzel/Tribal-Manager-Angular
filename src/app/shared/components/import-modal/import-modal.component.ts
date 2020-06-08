import { Component, OnInit, ElementRef, Input, Output, EventEmitter, HostListener } from '@angular/core';
@Component({
  selector: 'app-import-modal',
  templateUrl: './import-modal.component.html',
  styleUrls: ['./import-modal.component.scss']
})
export class ImportModalComponent implements OnInit {
  data: string = null;
  @Output() closeModal: EventEmitter<object[]> = new EventEmitter();
  @HostListener('document:click', ['$event.target'])
  close(target: HTMLElement) {
    if (!this.el.nativeElement.contains(target)) {
      if (this.data !== null) this.closeModal.emit(this.dataToArray(this.data));
    } else if (target.className === 'import') {
      if (this.data !== null) this.closeModal.emit(this.dataToArray(this.data));
    }
  }
  constructor(private el: ElementRef) { }

  ngOnInit() {
  }
  dataToArray(data) {
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
