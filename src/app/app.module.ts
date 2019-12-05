import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TribalNoblesComponent } from './tribal-nobles/tribal-nobles.component';
import { ModalComponent } from './modal/modal.component';
import { BestAttackPlanComponent } from './best-attack-plan/best-attack-plan.component';
import { TribalAssignOrdersComponent } from './tribal-assign-orders/tribal-assign-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TribalNoblesComponent,
    ModalComponent,
    BestAttackPlanComponent,
    TribalAssignOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
