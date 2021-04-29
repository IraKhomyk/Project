import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialsPipe } from './Initials/initials.pipe';
import { TimeAgoPipe } from './time-ago/time-ago.pipe';
import { CreatePathPipe } from './create-path/create-path.pipe';
import { CreateColorPipe } from './createColor/create-color.pipe';

@NgModule({
  declarations: [
    InitialsPipe,
    TimeAgoPipe,
    CreatePathPipe,
    CreateColorPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InitialsPipe,
    TimeAgoPipe,
    CreatePathPipe,
    CreateColorPipe
  ]
})

export class PipesModule {
}
