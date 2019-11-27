import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TribalNoblesComponent } from './tribal-nobles/tribal-nobles.component';
import { TribalAttackPlanComponent } from './tribal-attack-plan/tribal-attack-plan.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TribalNoblesComponent,
    TribalAttackPlanComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
