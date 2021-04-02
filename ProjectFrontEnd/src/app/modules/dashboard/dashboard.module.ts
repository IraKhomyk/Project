import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { BadgesComponent } from './components/badges/badges.component';

import { ChallengesComponent } from './components/challenges/challenges.component';
import { ExoftAchievementsComponent } from './components/exoft-achievements/exoft-achievements.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { PersonalAchievementsComponent } from './components/personal-achievements/personal-achievements.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { TopChartComponent } from './components/top-chart/top-chart.component';
import { DashboardComponent } from './dashboard.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';


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
  ],
  imports: [
    MaterialModule,
    RouterModule,
    CommonModule,
    PipesModule.forRoot(),
  ],
})

export class DashboardModule { }