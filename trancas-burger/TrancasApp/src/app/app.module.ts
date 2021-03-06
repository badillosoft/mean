import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { HamburguesaComponent } from './hamburguesa/hamburguesa.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HamburguesaNuevaComponent } from './hamburguesa-nueva/hamburguesa-nueva.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HamburguesaComponent,
    HomePageComponent,
    HamburguesaNuevaComponent
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
