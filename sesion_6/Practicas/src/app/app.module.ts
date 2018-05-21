import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MiPaginaComponent } from './mi-pagina/mi-pagina.component';
import { RelojComponent } from './reloj/reloj.component';
import { Reloj24xmPipe } from './reloj24xm.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MiPaginaComponent,
    RelojComponent,
    Reloj24xmPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
