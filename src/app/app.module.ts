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
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { DASHBOARDComponent } from './dashboard/dashboard.component';
import { GreetingComponent } from './dashboard/blocks/greeting/greeting.component';
import {MatCardModule} from '@angular/material/card';
import { PersonalEchievementsComponent } from './dashboard/blocks/personal-echievements/personal-echievements.component';
import { HeaderComponent } from './header/header.component';
import { ThankYouComponent } from './dashboard/blocks/thank-you/thank-you.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    DASHBOARDComponent,
    GreetingComponent,
    PersonalEchievementsComponent,
    HeaderComponent,
    ThankYouComponent,
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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
