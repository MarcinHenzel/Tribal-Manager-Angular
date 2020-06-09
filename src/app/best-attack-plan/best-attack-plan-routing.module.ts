import { BestAttackPlanComponent } from './best-attack-plan.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{path: '', component: BestAttackPlanComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BestAttackPlanRoutingModule { }
