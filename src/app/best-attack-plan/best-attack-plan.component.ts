import { IOrder } from './../interfaces';
import { Component, OnInit, Pipe } from '@angular/core';
import * as moment from 'moment';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, FormBuilder, ValidatorFn } from '@angular/forms';
import { UtilityService } from '../services/utility.service';
@Component({
  selector: 'app-best-attack-plan',
  templateUrl: './best-attack-plan.component.html',
  styleUrls: ['./best-attack-plan.component.scss']
})
export class BestAttackPlanComponent implements OnInit {
  timeForm: FormGroup;
  orderArr: IOrder[];
  coordsForm: FormGroup;
  units: any = this.utilityService.units;
  keepOriginalOrder = (a: any) => a.key;
  constructor(private utilityService: UtilityService, private fb: FormBuilder) {
    this.coordsForm = this.fb.group({
      sources: ['', Validators.required],
      targets: ['', Validators.required],
    }, { validator: [this.validateCoords] }
    );
  }
  ngOnInit() {
    this.timeForm = new FormGroup({
      destinationTime: new FormControl(),
      unit: new FormControl('ram', Validators.required),
      sleepFrom: new FormControl(),
      sleepTo: new FormControl()
    });
  }
  validateCoords: ValidatorFn = (fg: FormGroup) => {
    if (this.amountOfCoords(fg.get('targets').value) === this.amountOfCoords(fg.get('sources').value)) {
      return null;
    } else {
      return { validCoords: true };
    }
  }
  amountOfCoords(coordsText: string, valueFlag: boolean = false): number | string[] {
    const coords: string[] = coordsText.split(' ');
    const pattern = /\d{3}\|\d{3}/;
    const trueCoords = coords.filter((coord) => {
      return pattern.test(coord);
    });
    return valueFlag ? trueCoords : trueCoords.length;
  }
  findBestAttackPlan() {
    this.orderArr = this.pickBestSet().sort((a, b) => (a.distance < b.distance) ? 1 : -1);
  }
  pickBestSet() {
    const sourceArr = this.amountOfCoords(this.coordsForm.value.sources, true);
    const targetArr = this.amountOfCoords(this.coordsForm.value.targets, true);
    let bestApproach = {
      orders: [],
      points: 0
    };
    for (let i = 0; i < 12; i++) {
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
    console.log(bestApproach.points);
    return bestApproach.orders;
  }
  createOrders(sourceArr, targetArr) {
    const approach = { orders: [], points: 0 };
    for (let i = 0; i < sourceArr.length; i++) {
      const distance = this.utilityService.countDistance(sourceArr[i], targetArr[i]);
      const ms = Math.floor(distance * this.timeForm.value.unit * 60 * 1000);
      const timeAttack = moment(new Date(this.timeForm.value.destinationTime)).subtract(ms, 'ms');

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
