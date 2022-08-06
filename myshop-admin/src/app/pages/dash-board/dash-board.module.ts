import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardRoutingModule } from './dash-board-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    NgChartsModule
  ]
})
export class DashBoardModule { }
