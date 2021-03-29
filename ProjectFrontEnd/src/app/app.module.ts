import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { LeftSidebarComponent } from './modules/left-sidebar/left-sidebar.component';
import { DASHBOARDComponent } from './modules/dashboard/dashboard.component';
import { GreetingComponent } from './modules/dashboard/blocks/greeting/greeting.component';
import {MatCardModule} from '@angular/material/card';
import { PersonalAchievementsComponent } from './modules/dashboard/blocks/personal-achievements/personal-achievements.component';
import { HeaderComponent } from './modules/header/header.component';
import { ThankYouComponent } from './modules/dashboard/blocks/thank-you/thank-you.component';
import { BadgesComponent } from './modules/dashboard/blocks/badges/badges.component';
import { TopChartComponent } from './modules/dashboard/blocks/top-chart/top-chart.component';
import { ExoftAchievementsComponent } from './modules/dashboard/blocks/exoft-achievements/exoft-achievements.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ChallengesComponent } from './modules/dashboard/blocks/challenges/challenges.component';
@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    DASHBOARDComponent,
    GreetingComponent,
    PersonalAchievementsComponent,
    HeaderComponent,
    ThankYouComponent,
    BadgesComponent,
    TopChartComponent,
    ExoftAchievementsComponent,
    ChallengesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTabsModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
