import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './components/page/page.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./dash-board/dash-board.module').then(
            (m) => m.DashBoardModule
          ),
      },
      {
        path: 'my-profile',
        loadChildren: () =>
          import('./my-profile/my-profile.module').then(
            (m) => m.MyProfileModule
          ),
      },
      {
        path: 'product-list',
        loadChildren: () =>
          import('./product-list/product-list.module').then(
            (m) => m.ProductListModule
          ),
      },
      {
        path: 'stocks',
        loadChildren: () =>
          import('./stocks/stocks.module').then((m) => m.StocksModule),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('./reports/reports.module').then((m) => m.ReportsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
