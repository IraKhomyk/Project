import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { MaterialModule } from '../material/material.module';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    HeaderComponent,
    LeftSidebarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    PipesModule.forRoot(),
  ],
  exports: [
    HeaderComponent,
    LeftSidebarComponent,

  ]
})
export class MainMenuModule { }

