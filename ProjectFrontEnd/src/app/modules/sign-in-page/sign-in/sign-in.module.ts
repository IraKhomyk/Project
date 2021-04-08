import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SignInComponent } from './sign-in.component';



@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    SignInComponent,
  ]
})
export class SignInModule { }
