import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgesModule } from './badges/badges/badges.module';
import { DashboardModule } from './dashboard/dashboard/dashboard.module';
import { LayoutModule } from './layout/layout.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BadgesModule, 
    DashboardModule,
    LayoutModule,
  ]
})
export class UserModule { }
