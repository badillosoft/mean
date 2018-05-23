import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BurgerNewFormComponent } from './burger-new-form/burger-new-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from './materialize/materialize.module';

@NgModule({
  declarations: [
    AppComponent,
    BurgerNewFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
