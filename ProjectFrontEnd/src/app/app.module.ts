import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardModule } from './modules/dashboard/dashboard.module';
import { MaterialModule } from './shared/modules/material.module';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './modules/layout/layout.module';
import { BadgesModule } from './modules/badges/badges/badges.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthGuard } from './core/guards/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { AuthService } from './modules/auth/services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    LayoutModule,
    DashboardModule,
    BadgesModule,
    AuthModule,
    HttpClientModule
  ],

  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
