import { Component, OnInit, ViewChild } from '@angular/core';
import { AnswerTableComponent } from './answer-table/answer-table.component';

@Component({
  selector: 'app-tribal-assign-orders',
  templateUrl: './tribal-assign-orders.component.html',
  styleUrls: ['./tribal-assign-orders.component.scss']
})
export class TribalAssignOrdersComponent implements OnInit {
  data = { targets: [], players: [], ordersPerTarget: 2, randomTargetFactor: 0 };
  constructor() { }
  @ViewChild(AnswerTableComponent , {static: false}) answerTable: AnswerTableComponent;
  ngOnInit() {
  }
  getTargetData(data) {
    this.data.targets = data.map((item) => {
      return { xy: item.col1, offs: item.col2 };
    });
  }
  getPlayerData(data) {
    this.data.players = data.map((item) => {
      return { player: item.col1, hasOffs: item.col2 };
    });
    console.log(this.data);

  }
  run() {
    console.log(this.data);
    this.answerTable.assignOffs();
  }
}
