import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BadgesComponent } from './modules/badges/badges/badges.component';
import { GreetingComponent } from './modules/dashboard/components/greeting/greeting.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'main',
    component: AppComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'orders',
    component: GreetingComponent,
  },
  {
    path: 'badges',
    component:BadgesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
