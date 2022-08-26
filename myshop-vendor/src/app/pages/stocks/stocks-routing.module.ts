import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './components/stock/stock.component';

const routes: Routes = [
  { path: 'stock', component: StockComponent },
  { path: '', redirectTo: 'stock', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StocksRoutingModule {}
