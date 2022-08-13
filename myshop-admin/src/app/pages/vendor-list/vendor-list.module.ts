import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorListRoutingModule } from './vendor-list-routing.module';
import { VendorlistComponent } from './components/vendorlist/vendorlist.component';
import { VendorDetailComponent } from './components/vendor-detail/vendor-detail.component';
import { MaterialUlModule } from 'src/app/material-ul/material-ul.module';
import { MatDialogComponent } from './components/mat-dialog/mat-dialog.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    VendorlistComponent,
    VendorDetailComponent,
    MatDialogComponent,
    EditDialogComponent
  ],
  imports: [
    CommonModule,
    VendorListRoutingModule,
    MaterialUlModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class VendorListModule { }
