import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from './pipes/pipes.module';

import { RequestAchievementComponent } from './components/request-achievement/request-achievement.component';
import { EditProfileModalWinComponent } from './components/edit-profile-modal-win/edit-profile-modal-win.component';
import { LeaveMessaggeComponent } from './components/leave-messagge/leave-messagge.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { OtherUserProfileComponent } from './components/other-user-profile/other-user-profile.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';



@NgModule({
  declarations: [
    RequestAchievementComponent,
    EditProfileModalWinComponent,
    LeaveMessaggeComponent,
    ChangePasswordComponent,
    OtherUserProfileComponent,
    ThankYouComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ],
  exports: [
    RequestAchievementComponent,
    EditProfileModalWinComponent,
    LeaveMessaggeComponent,
    ChangePasswordComponent,
    OtherUserProfileComponent,
    ThankYouComponent
  ]
})
export class SharedModule { }
