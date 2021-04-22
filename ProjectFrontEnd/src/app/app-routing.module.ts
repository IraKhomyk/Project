import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgesComponent } from './modules/badges/badges/badges.component';
import { GreetingComponent } from './modules/dashboard/components/greeting/greeting.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { SignInComponent } from './modules/auth/components/sign-in/sign-in.component';
import { LayoutComponent } from './modules/layout/layout.component';

const routes: Routes = [
  { path: 'login', component: SignInComponent },
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
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
