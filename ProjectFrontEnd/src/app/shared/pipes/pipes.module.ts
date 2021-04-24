import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialsPipe } from './Initials/initials.pipe';
import { DateTimeAgoPipe } from './date-time-ago/date-time-ago.pipe';

@NgModule({
  declarations: [
    InitialsPipe,
    DateTimeAgoPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InitialsPipe,
    DateTimeAgoPipe
  ]
})

export class PipesModule {
  static forRoot() {
    return {
      ngModule: PipesModule,
      providers: [],
    };
  }
}
