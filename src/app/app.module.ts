import { AnswerTableComponent } from './components/answer-table/answer-table.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TribalNoblesComponent } from './tribal-nobles/tribal-nobles.component';
import { BestAttackPlanComponent } from './best-attack-plan/best-attack-plan.component';
import { TribalAssignOrdersComponent } from './tribal-assign-orders/tribal-assign-orders.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { InputTableComponent } from './components/input-table/input-table.component';
import { ImportModalComponent } from './components/import-modal/import-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RepetitionCounterComponent } from './repetition-counter/repetition-counter.component';
import { MatTableModule } from '@angular/material';
import {MatSortModule} from '@angular/material/sort';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TribalNoblesComponent,
    BestAttackPlanComponent,
    TribalAssignOrdersComponent,
    InputTableComponent,
    ImportModalComponent,
    AnswerTableComponent,
    RepetitionCounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    MatTableModule,
    MatSortModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
