import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BadgesComponent } from './components/badges/badges.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { ExoftAchievementsComponent } from './components/exoft-achievements/exoft-achievements.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { PersonalAchievementsComponent } from './components/personal-achievements/personal-achievements.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { TopChartComponent } from './components/top-chart/top-chart.component';
import { DashboardComponent } from './dashboard.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { OtherUserProfileComponent } from './components/other-user-profile/other-user-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    GreetingComponent,
    PersonalAchievementsComponent,
    ThankYouComponent,
    BadgesComponent,
    TopChartComponent,
    ExoftAchievementsComponent,
    ChallengesComponent,
    DashboardComponent,
    OtherUserProfileComponent,
  ],
  imports: [
    MaterialModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    SharedModule
  ],
})

export class DashboardModule { }