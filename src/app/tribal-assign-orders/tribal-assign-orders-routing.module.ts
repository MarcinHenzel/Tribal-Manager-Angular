import { TribalAssignOrdersComponent } from './tribal-assign-orders.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: TribalAssignOrdersComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TribalAssignOrdersRoutingModule { }
