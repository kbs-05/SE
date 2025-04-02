import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { SCannerComponent } from './scanner/scanner.component';
import { DPComponent } from './dp/dp.component';
import { EILComponent } from './eil/eil.component';
import { BSComponent } from './bs/bs.component';
import { ESLComponent } from './esl/esl.component';
import { IACComponent } from './iac/iac.component';
import { IASAComponent } from './iasa/iasa.component';
import { IEJComponent } from './iej/iej.component';
import { EILL1Component } from './eil.l1/eil.l1.component';
import { GENERATEURComponent } from './generateur/generateur.component';

const routes: Routes = [
  { path: '', component: ConnexionComponent},
  { path: 'scanner', component: SCannerComponent},
  { path: 'dp', component: DPComponent},
  { path: 'eil', component: EILComponent},
  { path: 'bs', component: BSComponent},
  { path: 'esl', component: ESLComponent},
  { path: 'iac', component: IACComponent},
  { path: 'iasa', component: IASAComponent},
  { path: 'iej', component: IEJComponent},
  { path: 'eil.l1', component: EILL1Component},
  { path: 'generateur', component: GENERATEURComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
