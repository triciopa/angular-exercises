import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SumComponent } from './components/sum/sum.component';
import { CronComponent } from './components/cron/cron.component';
import { CalcComponent } from './components/calc/calc.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductOrderComponent } from './components/product-order/product-order.component';
import { Form2Component } from './components/form2/form2.component';
import { Products2Component } from './components/products2/products2.component';

@NgModule({
  declarations: [
    AppComponent,
    SumComponent,
    CronComponent,
    CalcComponent,
    FormComponent,
    ListComponent,
    ProductListComponent,
    ProductOrderComponent,
    Form2Component,
    Products2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
