import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MiPaginaComponent } from './mi-pagina/mi-pagina.component';
import { RelojComponent } from './reloj/reloj.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPaginaComponent,
    RelojComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
