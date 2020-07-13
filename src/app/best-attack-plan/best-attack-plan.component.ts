import { Order } from '../shared/models';
import { Component, OnInit } from '@angular/core';
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
  spinnerVis = false;
  worker: Worker;
  senders = '455|604 452|605 453|616 451|612';
  targets = '506|615 504|604 498|623 480|543';
  keepOriginalOrder = (a: any) => a.key;
  constructor(private utilityService: UtilityService, private fb: FormBuilder) {

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
    this.worker = new Worker('./get-plan.worker', { type: 'module' });
    this.worker.onmessage = ({ data }) => {
      this.orderArr = JSON.parse(data).sort((a, b) => (a.distance < b.distance) ? 1 : -1);
      this.spinnerVis = false;
    };
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
    this.spinnerVis = true;
    const coords = {
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
    };
    this.worker.postMessage(coords);
  }
}
