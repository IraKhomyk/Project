import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { MaterialModule } from '../../shared/modules/material.module';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LeftSidebarComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    PipesModule.forRoot(),
  ],
  exports: [
    HeaderComponent,
    LeftSidebarComponent,
    LayoutComponent,

  ]
})
export class LayoutModule { }

