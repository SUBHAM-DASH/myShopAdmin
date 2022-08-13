import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardRoutingModule } from './dash-board-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MaterialUlModule } from 'src/app/material-ul/material-ul.module';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { PickUpComponent } from './components/pick-up/pick-up.component';
import { OrderComponent } from './components/order/order.component';
import { UsersComponent } from './components/users/users.component';
@NgModule({
  declarations: [
    DashboardComponent,
    SubscriptionComponent,
    PickUpComponent,
    OrderComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    NgChartsModule,
    MaterialUlModule
  ]
})
export class DashBoardModule { }
