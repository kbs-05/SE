import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { SCannerComponent } from './scanner/scanner.component';
import { DPComponent } from './dp/dp.component';
import { EILComponent } from './eil/eil.component';
import { BSComponent } from './bs/bs.component';
import { IEJComponent } from './iej/iej.component';
import { IACComponent } from './iac/iac.component';
import { ESLComponent } from './esl/esl.component';
import { IASAComponent } from './iasa/iasa.component';
import { EILL1Component } from './eil.l1/eil.l1.component';
import { GENERATEURComponent } from './generateur/generateur.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    SCannerComponent,
    DPComponent,
    EILComponent,
    BSComponent,
    IEJComponent,
    IACComponent,
    ESLComponent,
    IASAComponent,
    EILL1Component,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
