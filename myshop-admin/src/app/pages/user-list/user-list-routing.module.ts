import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './components/userlist/userlist.component';

const routes: Routes = [
  { path: 'userlist', component: UserlistComponent },
  { path: '', redirectTo: 'userlist', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserListRoutingModule {}
