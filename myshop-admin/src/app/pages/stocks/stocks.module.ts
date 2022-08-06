import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocksRoutingModule } from './stocks-routing.module';
import { StockComponent } from './components/stock/stock.component';


@NgModule({
  declarations: [
    StockComponent
  ],
  imports: [
    CommonModule,
    StocksRoutingModule
  ]
})
export class StocksModule { }
