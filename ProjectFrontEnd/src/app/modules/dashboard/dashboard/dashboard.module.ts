import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { GreetingComponent } from '../components/greeting/greeting.component';
import { PersonalAchievementsComponent } from '../components/personal-achievements/personal-achievements.component';
import { BadgesComponent } from '../components/badges/badges.component';
import { TopChartComponent } from '../components/top-chart/top-chart.component';
import { ExoftAchievementsComponent } from '../components/exoft-achievements/exoft-achievements.component';
import { ChallengesComponent } from '../components/challenges/challenges.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    GreetingComponent,
    PersonalAchievementsComponent,
    BadgesComponent,
    TopChartComponent,
    ExoftAchievementsComponent,
    ChallengesComponent,
    DashboardComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    SharedModule
  ],
})
export class DashboardModule { }