import { Component, OnInit, Input } from '@angular/core';
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-answer-table',
  templateUrl: './answer-table.component.html',
  styleUrls: ['./answer-table.component.scss']
})
export class AnswerTableComponent implements OnInit {
  offsAssignedArr: any[] = null;
  targetsAssigned = null;
  faCheckCircle = faCheckCircle;
  faTrashAlt = faTrashAlt;
  isModalVisible = false;
  constructor() { }
  /* const answerTextarea = document.getElementById('answersExport'); */
  @Input() data;
  ngOnInit() {
  }
  showModal = () => this.isModalVisible = true;

  targetsToReducedStr(order): string {
    const orderClone = JSON.parse(JSON.stringify(order));
    let str = orderClone.player;
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
  assignOffs(): void {
    console.log('dsa');
    const assignedOffs = [];
    let targetsCounter = 0;
    const data = JSON.parse(JSON.stringify(this.data));
    data.targets.sort((a, b) => b.offs - a.offs);
    data.players.sort((a, b) => b.hasOffs - a.hasOffs);
    for (let i = 0; i < data.players.length; i++) {
      const targetsArr = [];
      for (let j = 0; j < data.targets.length; j++) {
        if (data.players[i].hasOffs === 0) {
          break;
        }
        if (data.targets[j].offs === 0) { continue; }
        for (let k = 0; k < this.randomizeOrdersPerTarget(); k++) {
          data.players[i].hasOffs--;
          targetsArr.push(data.targets[j].xy);
          data.targets[j].offs--;
          if (data.targets[j].offs === 0) {
            data.targets.splice(j, 1);
            j--;
            break;
          }
          if (data.players[i].hasOffs === 0) {
            break;
          }
        }
      }
      targetsCounter += targetsArr.length;
      if (targetsArr.length !== 0) {
        assignedOffs.push({
          player: data.players[i].player,
          targets: targetsArr
        });
      }

    }
    this.targetsAssigned = targetsCounter;

    this.offsAssignedArr = assignedOffs;
  }
  randomizeOrdersPerTarget(): number {
    const variation = this.data.randomTargetFactor ? Math.floor(Math.random() * this.data.randomTargetFactor + 1) : 0;
    if (Math.random() > 0.5) { return this.data.ordersPerTarget + variation; } else {
      if ((this.data.ordersPerTarget - variation) >= 1) {
        return this.data.ordersPerTarget - variation;
      } else {
        return 1;
      }
    }
  }
}
    /*     const targetsContainer = document.getElementById('targetsCountAnswer');
targetsContainer.innerHTML = targetsCounter;
const playersContainer = document.getElementById('playersCountAnswer');
playersContainer.innerHTML = playerCounter; */
