import { UtilityService } from './../services/utility.service';
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
  constructor(private modalService: ModalService, private utility: UtilityService) { }

  ngOnInit() {
    /*     this.bodyText = 'This text can be updated in modal 1'; */
  }
  setAllies(value) {
    this.allies = [];
    const rows = value.split('\n');
    for (const row of rows) {
      if (this.utility.isPlayer(row)) {
        this.allies.push({ player: row, villages: [] });
      } else {
        this.allies[this.allies.length - 1].villages.push(this.utility.transformToCoords(row));
      }
    }
    this.start();
    }

  setTarget(value) {
    const target = this.utility.transformToCoords(value);
    this.target.x = target.x;
    this.target.y = target.y;
    this.start();
  }
  start() {
    this.answerTable = [];
    for (const ally of this.allies) {
      const player: string = ally.player;
      const allCounter: number = ally.villages.length;
      const inRangeCounter = ally.villages.reduce((total, value) => {
        if (this.utility.isInNobleRange(value, this.target)) {
          return ++total;
        } else {
          return total;
        }
      }, 0);

      this.answerTable.push({ player, inRangeCounter, allCounter });
    }
    }

  /*   openModal(id: string) {
      this.modalService.open(id);
    }
  1.
    closeModal(id: string) {
      this.modalService.close(id);
    } */
}
