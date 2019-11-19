import { TribalAttackPlanComponent } from './tribal-attack-plan/tribal-attack-plan.component';
import { TribalNoblesComponent } from './tribal-nobles/tribal-nobles.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: TribalNoblesComponent},
  {path: 'attack-plan', component: TribalAttackPlanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
