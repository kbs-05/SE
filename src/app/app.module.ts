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
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideImgixLoader } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EILTC1Component } from './eil.tc1/eil.tc1.component'; 
import { QRCodeModule } from 'angularx-qrcode'; 



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
    EILTC1Component,
    GENERATEURComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    FormsModule,
    QRCodeModule,    
  ],
  providers: [
    provideRouter([]),
    provideFirebaseApp(() => initializeApp({ /* votre configuration Firebase */ })),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    provideImgixLoader('https://yourdomain.imgix.net'),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
