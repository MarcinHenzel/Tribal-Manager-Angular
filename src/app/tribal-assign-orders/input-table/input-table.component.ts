import { Component, OnInit, ElementRef, HostListener, Output, EventEmitter, HostBinding, Input } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { ImportModalComponent } from '../import-modal/import-modal.component';
import { MatDialogConfig, MatDialog } from '@angular/material';
import {tap} from 'rxjs/operators';
@Component({
  selector: 'app-input-table',
  templateUrl: './input-table.component.html',
  styleUrls: ['./input-table.component.scss'],
  animations: [
    trigger(
      'appearAnimation',
      [
        state('void', style({ opacity: 0, transform: 'scale(0.1)'})),
        transition(
          ':enter, :leave', [animate(250)]
        )
      ]
    )
  ]
})
export class InputTableComponent implements OnInit {
  isModalVisible = false;
  modalInput: any[];
  tableLength: number;
  offsAmount: number;
  constructor(private el: ElementRef, private dialog: MatDialog) { }
  @Input() type: string;
  @Output() dataEmitter: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }
  showModal = () => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    if(this.type === 'VILLAGES') {
      dialogConfig.data = {headerMes: 'Write village coords and amount of offs to assign'};
    } else {
      dialogConfig.data = {headerMes: 'Write players name and amount of offs they have'};
    }
    const dialogRef = this.dialog.open(ImportModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined) return;
      this.modalInput = result;
      this.offsAmount = result.reduce((total, obj) => {
        return total + parseInt(obj.col2, 10);
      }, 0);
      this.dataEmitter.emit(this.modalInput);
    });

  }


}
