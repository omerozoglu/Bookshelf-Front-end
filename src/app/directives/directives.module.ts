import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GButtonDirective } from './g-button.directive';



@NgModule({
  declarations: [
    GButtonDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GButtonDirective
  ]
})
export class DirectivesModule { }
