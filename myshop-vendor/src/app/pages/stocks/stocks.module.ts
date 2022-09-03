import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocksRoutingModule } from './stocks-routing.module';
import { StockComponent } from './components/stock/stock.component';
import { MaterialUiModule } from 'src/app/material-ui/material-ui.module';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ShowProductComponent } from './components/show-product/show-product.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
 
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    StockComponent,
    AddProductComponent,
    ShowProductComponent
  ],
  imports: [
    CommonModule,
    StocksRoutingModule,
    MaterialUiModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    Ng2SmartTableModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class StocksModule { }
