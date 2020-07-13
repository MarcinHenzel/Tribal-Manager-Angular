import { Order } from '../shared/models';
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import * as moment from 'moment';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn } from '@angular/forms';
import { UtilityService } from '../shared/services/utility.service';
@Component({
  selector: 'app-best-attack-plan',
  templateUrl: './best-attack-plan.component.html',
  styleUrls: ['./best-attack-plan.component.scss']
})
export class BestAttackPlanComponent implements OnInit {
  orderArr: Order[];
  senderEqualTargets = true;
  coordsForm: FormGroup;
  units: any;
  spinnerVis: boolean;
  worker: Worker;
  /*   @ViewChild('spinner', { static: true }) spinner: ElementRef; */
  senders = '455|604 452|605 453|616 451|612';
  targets = '506|615 504|604 498|623 480|543';
  keepOriginalOrder = (a: any) => a.key;
  constructor(private utilityService: UtilityService, private fb: FormBuilder, private renderer: Renderer2) {

    this.coordsForm = this.fb.group({
      destinationTime: new FormControl(''),
      unit: new FormControl('', Validators.required),
      sleepFrom: new FormControl('', Validators.required),
      sleepTo: new FormControl('', Validators.required),
      sources: new FormControl(this.senders, [Validators.required]),
      targets: new FormControl(this.targets, [Validators.required])
    }, { validators: this.validateCoords }
    );
  }

  ngOnInit() {
    this.units = this.utilityService.unitsSpeed;
    if (typeof Worker !== 'undefined') {
      // Create a new
      console.log('trying worker');
      this.worker = new Worker('./get-plan.worker', { type: 'module' });
      this.worker.onmessage = ({ data }) => {
        this.orderArr = JSON.parse(data).sort((a, b) => (a.distance < b.distance) ? 1 : -1);
      };
    }
  }
  amountOfCoords(type: string): number {
    return this.utilityService.coordsFromString(this.coordsForm.get(type).value).length;
  }
  validateCoords: ValidatorFn = (fg: FormGroup) => {
    if (fg.get('targets').value === '' || fg.get('sources').value === '') return null
    const targetsLen = (this.utilityService.coordsFromString(fg.get('targets').value) as string[]).length;
    const sourcesLen = (this.utilityService.coordsFromString(fg.get('sources').value) as string[]).length;
    if (targetsLen === sourcesLen) {
      this.senderEqualTargets = true;
      return null;
    } else {
      this.senderEqualTargets = false;
      return { validCoords: true };
    }
  }

  findBestAttackPlan() {
    let coords = {
      sourceArr: this.utilityService.coordsFromString(this.coordsForm.value.sources),
      targetArr: this.utilityService.coordsFromString(this.coordsForm.value.targets),
      coordsForm: {
        destinationTime: this.coordsForm.value.destinationTime,
        unit: this.coordsForm.value.unit,
        sleepFrom: this.coordsForm.value.sleepFrom,
        sleepTo: this.coordsForm.value.sleepTo,
        sources: this.coordsForm.value.sources,
        targets: this.coordsForm.value.targets
      }
    }
    this.worker.postMessage(coords);
  }
  /*     this.orderArr = (this.worker.postMessage(coords) as any).sort((a, b) => (a.distance < b.distance) ? 1 : -1); */
  /* this.renderer.setStyle(this.spinner.nativeElement, 'display', 'flex');
  setTimeout(() => {
    this.orderArr = this.pickBestSet().sort((a, b) => (a.distance < b.distance) ? 1 : -1);
    this.renderer.setStyle(this.spinner.nativeElement, 'display', 'none');
  }, 10); */ // some browsers require some more time

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

    const obj: Order = {
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
