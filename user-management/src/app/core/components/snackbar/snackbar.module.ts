import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/material/material.module';
import { SnackbarComponent } from './snackbar.component';



@NgModule({
  declarations: [SnackbarComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SnackbarComponent
  ]
})
export class SnackbarModule { }
