import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorDetailComponent } from './components/vendor-detail/vendor-detail.component';

const routes: Routes = [
  { path: 'vendor-detail', component: VendorDetailComponent },
  { path: '', redirectTo: 'vendor-detail', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorListRoutingModule {}
