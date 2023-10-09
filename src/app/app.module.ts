import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyfirstcomponentComponent } from './myfirstcomponent/myfirstcomponent.component';
import { HeaderComponent } from './header/header.component';
import { NavigateComponent } from './navigate/navigate.component';
import { SachinnavigateComponent } from './sachinnavigate/sachinnavigate.component';
import { ChikenComponent } from './chiken/chiken.component';
import { MuttonComponent } from './mutton/mutton.component';
import { DominosComponent } from './dominos/dominos.component';

@NgModule({
  declarations: [
    AppComponent,
    MyfirstcomponentComponent,
    HeaderComponent,
    NavigateComponent,
    SachinnavigateComponent,
    ChikenComponent,
    MuttonComponent,
    DominosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
