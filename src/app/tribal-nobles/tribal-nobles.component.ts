import { ModalService } from './../services/modal.service';
import { Component, OnInit } from '@angular/core';
import { IVillage } from '../interfaces/IVillage';
import { IAllies } from '../interfaces/IAllies';
import { ReferenceAst } from '@angular/compiler';

@Component({
  selector: 'app-tribal-nobles',
  templateUrl: './tribal-nobles.component.html',
  styleUrls: ['./tribal-nobles.component.scss']
})
export class TribalNoblesComponent implements OnInit {
  /*   bodyText: string; */
  allies: Array<IAllies> = [];
  target: IVillage = { x: null, y: null };
  answerTable: Array<object> = [];
  constructor(private modalService: ModalService) { }

  ngOnInit() {
    /*     this.bodyText = 'This text can be updated in modal 1'; */
  }
  setAllies(value) {
    this.allies = [];
    const rows = value.split('\n');
    for (let i = 0; i < rows.length; i++) {
      if (this.isPlayer(rows[i])) {
        this.allies.push({ player: rows[i], villages: [] });
      } else {
        this.allies[this.allies.length - 1].villages.push(this.transformToCoords(rows[i]));
      }
    }
    this.start();
  }
  transformToCoords(text) {
    const target = text.split('|');
    const x = parseInt(target[0], 10) as number;
    const y = parseInt(target[1], 10) as number;
    return { x, y };
  }
  setTarget(value) {
    const target = this.transformToCoords(value);
    this.target.x = target.x;
    this.target.y = target.y;
    this.start();
  }
  isPlayer(text: string): boolean {
    if (text.length === 7 && text[3] === '|') {
      return false;
    } else {
      return true;
    }
  }
  start() {
    this.answerTable = [];
    for (let i = 0; i < this.allies.length; i++) {
      const player: string = this.allies[i].player;
      const allCounter: number = this.allies[i].villages.length;
      const inRangeCounter = this.allies[i].villages.reduce((total, value) => {
        if (this.isInRange(value, this.target)) {
          return ++total;
        } else {
          return total;
        }
      }, 0);

      this.answerTable.push({ player, inRangeCounter, allCounter });
    }
  }
  isInRange(vil1: IVillage, vil2: IVillage): boolean {
    const distance = Math.sqrt((Math.pow((vil2.x - vil1.x), 2) + Math.pow((vil2.y - vil1.y), 2)));
    return distance <= 100;
  }
  /*   openModal(id: string) {
      this.modalService.open(id);
    }
  1.
    closeModal(id: string) {
      this.modalService.close(id);
    } */
}
