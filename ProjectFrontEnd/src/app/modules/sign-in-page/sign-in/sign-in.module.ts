import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SignInComponent } from './sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    SignInComponent,
  ]
})
export class SignInModule { }
