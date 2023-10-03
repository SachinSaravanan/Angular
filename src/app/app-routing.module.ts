import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavigateComponent } from './navigate/navigate.component';
import { SachinnavigateComponent } from './sachinnavigate/sachinnavigate.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HeaderComponent },
  { path: 'about', component: NavigateComponent },
  { path: 'contact', component: SachinnavigateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
