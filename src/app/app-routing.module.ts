import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DASHBOARDComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'main',
    component: AppComponent,
  },
  {
    path: '',
    component: DASHBOARDComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
