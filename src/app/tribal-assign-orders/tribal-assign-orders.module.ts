import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './../shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './../shared/components/login/login.component';
import { AnswerTableComponent } from './answer-table/answer-table.component';
import { ImportModalComponent } from './../shared/components/import-modal/import-modal.component';
import { InputTableComponent } from './input-table/input-table.component';
import { TribalAssignOrdersComponent } from './tribal-assign-orders.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TribalAssignOrdersRoutingModule } from './tribal-assign-orders-routing.module';


@NgModule({
  declarations: [TribalAssignOrdersComponent,
    InputTableComponent,
    ImportModalComponent,
    AnswerTableComponent,
    LoginComponent],
  imports: [
    CommonModule,
    TribalAssignOrdersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FontAwesomeModule,
  ]
})
export class TribalAssignOrdersModule { }
