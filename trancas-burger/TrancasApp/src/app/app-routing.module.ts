import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HamburguesaNuevaComponent } from './hamburguesa-nueva/hamburguesa-nueva.component';

const routes : Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "home",
    component: HomePageComponent
  },
  {
    path: "nueva",
    component: HamburguesaNuevaComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
