import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavigateComponent } from './navigate/navigate.component';
import { SachinnavigateComponent } from './sachinnavigate/sachinnavigate.component';
import { ChikenComponent } from './chiken/chiken.component';
import { MuttonComponent } from './mutton/mutton.component';
import { DominosComponent } from './dominos/dominos.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'dominos', component: DominosComponent },
  { path: 'navigate', component: NavigateComponent },
  { path: 'mutton', component: MuttonComponent },
  { path: 'chicken', component:ChikenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
