import { UtilityService } from './../services/utility.service';
import { Component, OnInit, Pipe } from '@angular/core';
/* import * as moemnt from '../../../node_modules/moment/min' */
import * as moment from 'moment';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-best-attack-plan',
  templateUrl: './best-attack-plan.component.html',
  styleUrls: ['./best-attack-plan.component.scss']
})
export class BestAttackPlanComponent implements OnInit {
  dateForm: FormGroup;
  destinationData: Date;
  constructor(private utilityService: UtilityService) { }

  ngOnInit() {
    this.dateForm = new FormGroup({
      year: new FormControl(),
      month: new FormControl(),
      day: new FormControl(),
      hour: new FormControl(),
      minute: new FormControl(),
      source: new FormControl(),
      targets: new FormControl()
    })
  }
  findBestAttackPlan() {
    const offArr = this.dateForm.value.source.split(' ');
    const targetArr = this.dateForm.value.targets.split(' ');
    this.destinationData = new Date(
      this.dateForm.value.year,
      this.dateForm.value.month - 1,
      this.dateForm.value.day,
      this.dateForm.value.hour,
      this.dateForm.value.minute,
      0,
      0
    );
    this.printOrders(offArr, targetArr);

  }
  pickBestSet(offArr, targetArr) {
    let bestApproach = {
      'orders': [],
      'points': 0
    };
    for (let i = 0; i < 1110; i++) {
      this.randomlyChangeOrder(offArr);
      this.randomlyChangeOrder(targetArr);
      let orders = this.createOrders(offArr, targetArr);
      let points = orders.reduce((pPoints, order) => {
        if (order.hoursAttack >= 2) {
          return ++pPoints;
        } else {
          return pPoints;
        }
      }, 0)
      if (bestApproach.points < points) {
        bestApproach = {orders: null,
        points : null};
        bestApproach = {
          'orders': orders,
          'points': points
        }
      }
    }
    console.log(bestApproach.points);
    return bestApproach.orders;
  }
  createOrders(offArr, targetArr) {
    let approach = [];
    for (let i = 0; i < offArr.length; i++) {
      let obj = {};
      obj['from'] = offArr[i];
      obj['to'] = targetArr[i];
      obj['distance'] = this.utilityService.countDistance(offArr[i], targetArr[i]);
      /* obj['ms'] = Math.floor(obj['distance'] * 27.783 * 60 * 1000); */
      obj['ms'] = Math.floor(obj['distance'] * 32.383 * 60 * 1000);
      let timeAttack = moment(this.destinationData).subtract(obj['ms'], 'ms');
      obj.timeAttack = timeAttack;
      obj['hoursAttack'] = timeAttack.hour();
      approach.push(obj);
    }
/*     console.log(approach); */
    return approach;
  }
  printOrders(offArr, targetArr) {
    let answerContainer = document.getElementById('answer');
    let orderArr = [];
    orderArr = this.pickBestSet(offArr, targetArr).sort((a, b) => (a.distance < b.distance) ? 1 : -1);
    answerContainer.innerHTML = '';
    for (let i = 0; i < orderArr.length; i++) {
      answerContainer.innerHTML += `${i + 1}. ${orderArr[i].timeAttack.format("dddd, MMMM Do YYYY, h:mm:ss a")} Pochodzenie: ${orderArr[i].from} Cel:${orderArr[i].to}<br>`;
    }
  }
  randomlyChangeOrder(array) {
/*       let arrLenght = array.length / 2;
      for (let i = 0; i < arrLenght; i++) {
        let random = Math.floor(Math.random() * arrLenght);
        let temp = array[random];
        array.splice(random, 1)
        array.push(temp);
      } */

    array.sort(() => {
      return Math.random() - 0.5;
    })
  }
}
