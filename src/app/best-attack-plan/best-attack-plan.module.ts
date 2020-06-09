import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './../shared/material.module';
import { BestAttackPlanComponent } from './best-attack-plan.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestAttackPlanRoutingModule } from './best-attack-plan-routing.module';


@NgModule({
  declarations: [BestAttackPlanComponent],
  imports: [
    CommonModule,
    BestAttackPlanRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class BestAttackPlanModule { }
