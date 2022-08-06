import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './components/page/page.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: 'dash-board',
        loadChildren: () =>
          import('./dash-board/dash-board.module').then(
            (m) => m.DashBoardModule
          ),
      },
      {
        path: 'stocks',
        loadChildren: () =>
          import('./stocks/stocks.module').then((m) => m.StocksModule),
      },
      {
        path: 'push-notification',
        loadChildren: () =>
          import('./push-notification/push-notification.module').then(
            (m) => m.PushNotificationModule
          ),
      },
      {
        path: 'user-list',
        loadChildren: () =>
          import('./user-list/user-list.module').then((m) => m.UserListModule),
      },
      {
        path: 'vendor-list',
        loadChildren: () =>
          import('./vendor-list/vendor-list.module').then(
            (m) => m.VendorListModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
