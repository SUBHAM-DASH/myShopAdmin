import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorlistComponent } from './components/vendorlist/vendorlist.component';

const routes: Routes = [
  { path: 'vendorlist', component: VendorlistComponent },
  { path: '', redirectTo: 'vendorlist', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorListRoutingModule {}
