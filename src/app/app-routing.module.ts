import { MatDatepickerModule } from '@angular/material/datepicker';
import { BestAttackPlanComponent } from './best-attack-plan/best-attack-plan.component';
import { TribalAssignOrdersComponent } from './tribal-assign-orders/tribal-assign-orders.component';
import { TribalNoblesComponent } from './tribal-nobles/tribal-nobles.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';

const routes: Routes = [
  {path: '', component: TribalNoblesComponent},
  {path: 'tribal-assign-orders', component: TribalAssignOrdersComponent},
  {path: 'best-attack-plan', component: BestAttackPlanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
