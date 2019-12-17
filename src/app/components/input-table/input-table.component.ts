import { Component, OnInit, ElementRef, Renderer2, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

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
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  @HostListener('document:click', ['$event.target'])
  clickout(target: HTMLElement) {
    if (!this.el.nativeElement.contains(target)) {
      this.isModalVisible = false;
    } else if (target.className === 'close') {
      this.isModalVisible = false;
    }
  }
  ngOnInit() {
  }
  showModal = () => this.isModalVisible = true;
  closeModal(data: any[]) {
    this.isModalVisible = false;
    this.modalInput = data;
    this.offsAmount = data.reduce((total, obj) => {
      return total + parseInt(obj.col2, 10);
    }, 0);
  }

}
