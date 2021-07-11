import { AppModule } from './../app.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './../shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AnswerTableComponent } from './answer-table/answer-table.component';
import { ImportModalComponent } from './import-modal/import-modal.component';
import { InputTableComponent } from './input-table/input-table.component';
import { TribalAssignOrdersComponent } from './tribal-assign-orders.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TribalAssignOrdersRoutingModule } from './tribal-assign-orders-routing.module';
import { ExportModalComponent } from './export-modal/export-modal.component';


@NgModule({
  declarations: [TribalAssignOrdersComponent,
    InputTableComponent,
    ImportModalComponent,
    AnswerTableComponent,
    ExportModalComponent],
  imports: [
    CommonModule,
    TribalAssignOrdersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FontAwesomeModule,
  ],
  entryComponents: [ExportModalComponent, ImportModalComponent]
})
export class TribalAssignOrdersModule { }
