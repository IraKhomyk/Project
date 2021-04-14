import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { MaterialModule } from '../material/material.module';
import { PipesModule } from '../pipes-lalala/pipes.module';
import { EditProfileModalWinComponent } from '../edit-profile/edit-profile-modal-win/edit-profile-modal-win.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    LeftSidebarComponent,
    EditProfileModalWinComponent,
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
    EditProfileModalWinComponent
  ]
})
export class MainMenuModule { }

