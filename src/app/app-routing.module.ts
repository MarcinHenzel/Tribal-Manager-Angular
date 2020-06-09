
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', loadChildren: () => import('./tribal-nobles/tribal-nobles.module').then(m => m.TribalNoblesModule)},
  {path: 'tribal-assign-orders',
  loadChildren : () => import('./tribal-assign-orders/tribal-assign-orders.module').then(m => m.TribalAssignOrdersModule)},
  {path: 'best-attack-plan', loadChildren: () => import('./best-attack-plan/best-attack-plan.module').then(m => m.BestAttackPlanModule)},
  {path: 'repetition-counter',
  loadChildren: () => import('./repetition-counter/repetition-counter.module').then(m => m.RepetitionCounterModule)},
  {path: '', redirectTo: '', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
