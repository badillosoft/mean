import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [],
  exports: [
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterializeModule { }
