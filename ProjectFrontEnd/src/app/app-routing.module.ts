import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

import { SignInComponent } from './modules/auth/components/sign-in/sign-in.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { BadgesComponent } from './modules/badges/badges/badges.component';
import { GreetingComponent } from './modules/dashboard/components/greeting/greeting.component';

const routes: Routes = [
  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
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
        component: BadgesComponent,
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
