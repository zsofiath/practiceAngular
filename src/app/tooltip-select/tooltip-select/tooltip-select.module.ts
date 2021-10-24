import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipSelectComponent } from './tooltip-select.component';



@NgModule({
  declarations: [TooltipSelectComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    TooltipSelectComponent
  ]
})
export class TooltipSelectModule { }
