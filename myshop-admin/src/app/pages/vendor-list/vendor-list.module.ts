import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorListRoutingModule } from './vendor-list-routing.module';
import { VendorlistComponent } from './components/vendorlist/vendorlist.component';


@NgModule({
  declarations: [
    VendorlistComponent
  ],
  imports: [
    CommonModule,
    VendorListRoutingModule
  ]
})
export class VendorListModule { }
