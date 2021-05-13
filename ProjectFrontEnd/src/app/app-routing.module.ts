import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

import { SignInComponent } from './modules/auth/components/sign-in/sign-in.component';
import { LayoutComponent } from './modules/user/layout/layout.component';
import { DashboardComponent } from './modules/user/dashboard/dashboard/dashboard.component';
import { BadgesComponent } from './modules/user/badges/badges/badges.component';
import { GreetingComponent } from './modules/user/dashboard/components/greeting/greeting.component';
import { Roles } from './shared/enums/roles';
import { AdminComponent } from './modules/admin/admin/admin.component';

const routes: Routes = [
  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
   // data: { roles: [Roles.Admin] },
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
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
