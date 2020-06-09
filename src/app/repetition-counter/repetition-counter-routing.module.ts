import { RepetitionCounterComponent } from './repetition-counter.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {path: '', component: RepetitionCounterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepetitionCounterRoutingModule { }
