import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PushNotificationRoutingModule } from './push-notification-routing.module';
import { PushnotificationComponent } from './components/pushnotification/pushnotification.component';
import { EmailTemplateComponent } from './components/email-template/email-template.component';
import { PushTemplateComponent } from './components/push-template/push-template.component';
import { MaterialUlModule } from 'src/app/material-ul/material-ul.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PushnotificationComponent,
    EmailTemplateComponent,
    PushTemplateComponent
  ],
  imports: [
    CommonModule,
    PushNotificationRoutingModule,
    MaterialUlModule,
    SharedModule,
    CKEditorModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PushNotificationModule { }
