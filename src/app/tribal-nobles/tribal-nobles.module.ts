import { TribalNoblesComponent } from './tribal-nobles.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TribalNoblesRoutingModule } from './tribal-nobles-routing.module';


@NgModule({
  declarations: [TribalNoblesComponent],
  imports: [
    CommonModule,
    TribalNoblesRoutingModule,
  ]
})
export class TribalNoblesModule { }
