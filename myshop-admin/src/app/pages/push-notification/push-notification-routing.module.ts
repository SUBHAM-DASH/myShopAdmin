import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PushnotificationComponent } from './components/pushnotification/pushnotification.component';

const routes: Routes = [
  { path: 'pushnotification', component: PushnotificationComponent },
  { path: '', redirectTo: 'pushnotification', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PushNotificationRoutingModule {}
