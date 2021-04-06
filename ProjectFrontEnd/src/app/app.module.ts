import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardModule } from './modules/dashboard/dashboard.module';
import { MaterialModule } from './shared/material/material.module';
import { CommonModule } from '@angular/common';
import { MainMenuModule } from './shared/main-menu/main-menu.module';
import { BadgesComponent } from './modules/badges/badges/badges.component';
import { BadgesModule } from './modules/badges/badges/badges.module';
import { LastAchievementsComponent } from './modules/badges/components/last-achievements/last-achievements.component';



@NgModule({
  declarations: [
    AppComponent,
    BadgesComponent,
    LastAchievementsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    MainMenuModule,
    DashboardModule,
    BadgesModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }
