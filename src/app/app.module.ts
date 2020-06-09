import { MaterialModule } from './shared/material.module';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './shared/services/auth.service';
import { AnswerTableComponent } from './tribal-assign-orders/answer-table/answer-table.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { BestAttackPlanComponent } from './best-attack-plan/best-attack-plan.component';
import { TribalAssignOrdersComponent } from './tribal-assign-orders/tribal-assign-orders.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTableComponent } from './tribal-assign-orders/input-table/input-table.component';
import { ImportModalComponent } from './shared/components/import-modal/import-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './shared/components/login/login.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent
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
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    HttpClientModule,
    AngularFireAuthModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
