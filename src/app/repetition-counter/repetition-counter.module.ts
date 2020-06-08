import { MatTableModule } from '@angular/material';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './../material.module';
import { RepetitionCounterComponent } from './repetition-counter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [RepetitionCounterComponent],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    MatTableModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: []
})
export class RepetitionCounterModule { }
