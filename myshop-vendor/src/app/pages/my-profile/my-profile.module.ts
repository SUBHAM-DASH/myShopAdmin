import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProfileRoutingModule } from './my-profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    ProfileComponent,
    GoogleMapComponent,

  ],
  imports: [
    CommonModule,
    MyProfileRoutingModule,
    Ng2SmartTableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB0dcZMh4XfMrbGJLoR4Nl48n25x3utuwg',
      libraries: ['places']
    }),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MyProfileModule { }
