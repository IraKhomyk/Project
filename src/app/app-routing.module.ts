import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GreetingComponent } from './dashboard/blocks/greeting/greeting.component';
import { DASHBOARDComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'main',
    component: AppComponent,
  },
  {
    path: 'dashboard',
    component: DASHBOARDComponent,
  },
  {
    path: 'orders',
    component: GreetingComponent,
  },
  {
    path: 'badges',
    component:GreetingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
