import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PushNotificationRoutingModule } from './push-notification-routing.module';
import { PushnotificationComponent } from './components/pushnotification/pushnotification.component';


@NgModule({
  declarations: [
    PushnotificationComponent
  ],
  imports: [
    CommonModule,
    PushNotificationRoutingModule
  ]
})
export class PushNotificationModule { }
