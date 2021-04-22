import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SayThanksComponent } from './components/say-thanks/say-thanks.component';
import { RequestAchievementComponent } from './components/request-achievement/request-achievement.component';
import { EditProfileModalWinComponent } from './components/edit-profile-modal-win/edit-profile-modal-win.component';
import { MaterialModule } from './modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from './pipes/pipes.module';



@NgModule({
  declarations: [
    SayThanksComponent,
    RequestAchievementComponent,
    EditProfileModalWinComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ],
  exports:[
    SayThanksComponent,
    RequestAchievementComponent,
    EditProfileModalWinComponent,
  ]
})
export class SharedModule { }
