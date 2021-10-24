import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TooltipSelectModule } from './tooltip-select/tooltip-select/tooltip-select.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TooltipSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
