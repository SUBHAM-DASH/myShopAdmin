import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportComponent } from './components/report/report.component';
import { SubscriptionDetailsComponent } from './components/subscription-details/subscription-details.component';
import { SoldProductDetailsComponent } from './components/sold-product-details/sold-product-details.component';
import { SaleProductDetailsComponent } from './components/sale-product-details/sale-product-details.component';


@NgModule({
  declarations: [
    ReportComponent,
    SubscriptionDetailsComponent,
    SoldProductDetailsComponent,
    SaleProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    MatTabsModule,
    SharedModule
  ]
})
export class ReportsModule { }
