import { MaterialModule } from './../shared/material.module';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { RepetitionCounterComponent } from './repetition-counter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepetitionCounterRoutingModule } from './repetition-counter-routing.module';



@NgModule({
  declarations: [RepetitionCounterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RepetitionCounterRoutingModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: []
})
export class RepetitionCounterModule { }
