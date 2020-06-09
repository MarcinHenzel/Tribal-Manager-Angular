import { IOrder } from './../interfaces';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn } from '@angular/forms';
import { UtilityService } from '../shared/services/utility.service';
@Component({
  selector: 'app-best-attack-plan',
  templateUrl: './best-attack-plan.component.html',
  styleUrls: ['./best-attack-plan.component.scss']
})
export class BestAttackPlanComponent implements OnInit {
  orderArr: IOrder[];
  coordsForm: FormGroup;
  units: any = this.utilityService.unitsSpeed;
  keepOriginalOrder = (a: any) => a.key;
  constructor(private utilityService: UtilityService, private fb: FormBuilder) {


    this.coordsForm = this.fb.group({
      destinationTime: new FormControl('', Validators.required),
      unit: new FormControl('', Validators.required),
      sleepFrom: new FormControl('', Validators.required),
      sleepTo: new FormControl('', Validators.required),
      sources: new FormControl('111|222 222|333 333|444', [Validators.required]),
      targets: new FormControl('222|222 222|353 373|444', [Validators.required])
    }, {validators: this.validateCoords}
    );
  }
  ngOnInit() {
  }
  validateCoords: ValidatorFn = (fg: FormGroup) => {
    if (fg.get('targets').value === '' || fg.get('sources').value === '') return null
    const targetsLen = (this.utilityService.coordsFromString(fg.get('targets').value) as string[]).length;
    const sourcesLen = (this.utilityService.coordsFromString(fg.get('sources').value) as string[]).length;
    if (targetsLen === sourcesLen) {
      return null;
    } else {
      return { validCoords: true };
    }
  }

  findBestAttackPlan() {
    // TODO: loading adnotation https://stackoverflow.com/questions/54509605/angular-show-loading-spinner-till-methods-finish-execution
      this.orderArr = this.pickBestSet().sort((a, b) => (a.distance < b.distance) ? 1 : -1);
  }
  pickBestSet() {
    const sourceArr = this.utilityService.coordsFromString(this.coordsForm.value.sources);
    const targetArr = this.utilityService.coordsFromString(this.coordsForm.value.targets);
    let bestApproach = {
      orders: [],
      points: 0
    };
    for (let i = 0; i < 20000; i++) {
      (sourceArr as string[]).sort(() => Math.random() - 0.5);
      (targetArr as string[]).sort(() => Math.random() - 0.5);
      const approach = this.createOrders(sourceArr, targetArr);
      if (bestApproach.points < approach.points) {
        bestApproach = {
          orders: approach.orders,
          points: approach.points
        };
      }
    }
    return bestApproach.orders;
  }
  createOrders(sourceArr, targetArr) {
    const approach = { orders: [], points: 0 };
    for (let i = 0; i < sourceArr.length; i++) {
      const distance = this.utilityService.countDistance(sourceArr[i], targetArr[i]);
      const ms = Math.floor(distance * this.coordsForm.value.unit * 60 * 1000);
      const timeAttack = moment(new Date(this.coordsForm.value.destinationTime)).subtract(ms, 'ms');

      const obj: IOrder = {
        from: sourceArr[i],
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
    const from = this.coordsForm.value.sleepFrom;
    const to = this.coordsForm.value.sleepTo;
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
