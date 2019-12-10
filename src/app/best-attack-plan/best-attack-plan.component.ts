import { UtilityService } from './../services/utility.service';
import { Component, OnInit, Pipe } from '@angular/core';
import * as moment from 'moment';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-best-attack-plan',
  templateUrl: './best-attack-plan.component.html',
  styleUrls: ['./best-attack-plan.component.scss']
})
export class BestAttackPlanComponent implements OnInit {
  timeForm: FormGroup;
  coordsForm: FormGroup;
  orderArr: Array<object>;
  keepOriginalOrder = (a: any) => a.key;
  constructor(private utilityService: UtilityService, private builder: FormBuilder) {
    this.coordsForm = builder.group(
      {
        sources: '',
        targets: ''
      }
    )
  }

  ngOnInit() {




    this.timeForm = new FormGroup({
      destinationTime: new FormControl(),
      unit: new FormControl('ram'),
      sleepFrom: new FormControl(),
      sleepTo: new FormControl()
    });
    this.coordsForm = new FormGroup({
      sources: new FormControl(),
      targets: new FormControl()
    })
  }

  findBestAttackPlan() {
    this.orderArr = this.pickBestSet().sort((a, b) => (a.distance < b.distance) ? 1 : -1);
  }
  pickBestSet() {
    const offArr = this.coordsForm.value.sources.split(' ');
    const targetArr = this.coordsForm.value.targets.split(' ');
    let bestApproach = {
      orders: [],
      points: 0
    };
    for (let i = 0; i < 2; i++) {
      offArr.sort(() => Math.random() - 0.5);
      targetArr.sort(() => Math.random() - 0.5);
      const approach = this.createOrders(offArr, targetArr);
      if (bestApproach.points < approach.points) {
        bestApproach = {
          orders: approach.orders,
          points: approach.points
        };
      }
    }
    console.log(bestApproach.points);
    return bestApproach.orders;
  }
  createOrders(offArr, targetArr) {
    const approach = { orders: [], points: 0 };
    for (let i = 0; i < offArr.length; i++) {
      const distance = this.utilityService.countDistance(offArr[i], targetArr[i]);
      const ms = Math.floor(distance * this.timeForm.value.unit * 60 * 1000);
      const timeAttack = moment(new Date(this.timeForm.value.destinationTime)).subtract(ms, 'ms');

      const obj = {
        from: offArr[i],
        to: targetArr[i],
        distance,
        ms,
        timeAttack,
        sleepTime: this.inSleepTime(timeAttack.hour())
      };
      if (!obj.sleepTime) {
        approach.points++;
      }
      approach.orders.push(obj);
    }
    return approach;
  }
  inSleepTime(hour: number) {
    const from = this.timeForm.value.sleepFrom;
    const to = this.timeForm.value.sleepTo;
    let midnightPast = true;
    if (from > to) {
      midnightPast = false;
    }
    for (let i = from; i < to || midnightPast === false; i++) {
      if (i === 24) {
        midnightPast = true;
        i = 0;
      }
      if (i === hour) {
        return true;
      }
    }
    return false;
  }
}
