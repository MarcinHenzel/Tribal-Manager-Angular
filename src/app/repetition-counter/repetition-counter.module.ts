import { MaterialModule } from './../shared/material.module';
import { MatTableModule } from '@angular/material';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { RepetitionCounterComponent } from './repetition-counter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [RepetitionCounterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatTableModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: []
})
export class RepetitionCounterModule { }
