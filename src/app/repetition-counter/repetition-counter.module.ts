import { MaterialModule } from './../shared/material.module';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { RepetitionCounterComponent } from './repetition-counter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepetitionCounterRoutingModule } from './repetition-counter-routing.module';
import { ExportDialogCounterComponent } from './export-dialog-counter/export-dialog-counter.component';



@NgModule({
  declarations: [RepetitionCounterComponent, ExportDialogCounterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RepetitionCounterRoutingModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [],
  entryComponents: [ExportDialogCounterComponent]
})
export class RepetitionCounterModule { }
