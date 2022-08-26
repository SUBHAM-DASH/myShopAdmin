import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardRoutingModule } from './dash-board-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BalanceComponent } from './components/balance/balance.component';
import { SaleProductComponent } from './components/sale-product/sale-product.component';
import { SoldProductComponent } from './components/sold-product/sold-product.component';
import { WishlistProductComponent } from './components/wishlist-product/wishlist-product.component';
import { MaterialUiModule } from 'src/app/material-ui/material-ui.module';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DashboardComponent,
    BalanceComponent,
    SaleProductComponent,
    SoldProductComponent,
    WishlistProductComponent
  ],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    MaterialUiModule,
    NgChartsModule
  ]
})
export class DashBoardModule { }
