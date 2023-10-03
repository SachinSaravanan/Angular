import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyfirstcomponentComponent } from './myfirstcomponent/myfirstcomponent.component';
import { ChickencomponentComponent } from './chickencomponent/chicken.component';
import { HeaderComponent } from './header/header.component';
import { NavigateComponent } from './navigate/navigate.component';
import { SachinnavigateComponent } from './sachinnavigate/sachinnavigate.component';
import { ChikenComponent } from './chiken/chiken.component';

@NgModule({
  declarations: [
    AppComponent,
    MyfirstcomponentComponent,
    ChickencomponentComponent,
    HeaderComponent,
    NavigateComponent,
    SachinnavigateComponent,
    ChikenComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
