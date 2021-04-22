import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { BadgesComponent } from './badges.component';
import { ThanksComponent } from '../components/thanks/thanks.component';
import { EditProfileComponent } from '../components/edit-profile/edit-profile.component';
import { TotalAchievementsAndExpComponent } from '../components/total-achievements-and-exp/total-achievements-and-exp.component';
import { LastAchievementsComponent } from '../components/last-achievements/last-achievements.component';
import { FullListOfAchievementsComponent } from '../components/full-list-of-achievements/full-list-of-achievements.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BadgesComponent,
    ThanksComponent,
    EditProfileComponent,
    TotalAchievementsAndExpComponent,
    LastAchievementsComponent,
    FullListOfAchievementsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule,
    PipesModule
  ],
  exports: [
    BadgesComponent,
    ThanksComponent,
    EditProfileComponent,
    TotalAchievementsAndExpComponent,
    LastAchievementsComponent,
    FullListOfAchievementsComponent,
  ]
})
export class BadgesModule { }
