import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortRoutingModule } from './short-routing.module';
import { ConsoleComponent } from './console/console.component';


@NgModule({
  declarations: [
    ConsoleComponent
  ],
  imports: [
    CommonModule,
    ShortRoutingModule
  ]
})
export class ShortModule { }
