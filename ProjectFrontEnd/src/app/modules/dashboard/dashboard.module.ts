import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { BadgesComponent } from './blocks/badges/badges.component';

import { ChallengesComponent } from './blocks/challenges/challenges.component';
import { ExoftAchievementsComponent } from './blocks/exoft-achievements/exoft-achievements.component';
import { GreetingComponent } from './blocks/greeting/greeting.component';
import { PersonalAchievementsComponent } from './blocks/personal-achievements/personal-achievements.component';
import { ThankYouComponent } from './blocks/thank-you/thank-you.component';
import { TopChartComponent } from './blocks/top-chart/top-chart.component';
import { DashboardComponent } from './dashboard.component';
import { PipesModule } from 'src/app/shared/Pipes/pipes.module';


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
  exports:[
    
  ]

})

export class DashboardModule { }