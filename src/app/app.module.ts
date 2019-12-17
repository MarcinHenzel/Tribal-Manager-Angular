import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TribalNoblesComponent } from './tribal-nobles/tribal-nobles.component';
import { ModalComponent } from './modal/modal.component';
import { BestAttackPlanComponent } from './best-attack-plan/best-attack-plan.component';
import { TribalAssignOrdersComponent } from './tribal-assign-orders/tribal-assign-orders.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { InputTableComponent } from './components/input-table/input-table.component';
import { ImportModalComponent } from './components/import-modal/import-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TribalNoblesComponent,
    ModalComponent,
    BestAttackPlanComponent,
    TribalAssignOrdersComponent,
    InputTableComponent,
    ImportModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
