import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SumComponent } from './components/sum/sum.component';
import { CronComponent } from './components/cron/cron.component';
import { CalcComponent } from './components/calc/calc.component';

@NgModule({
  declarations: [
    AppComponent,
    SumComponent,
    CronComponent,
    CalcComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
