import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TribalNoblesComponent } from './tribal-nobles/tribal-nobles.component';
import { TribalAttackPlanComponent } from './tribal-attack-plan/tribal-attack-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TribalNoblesComponent,
    TribalAttackPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
