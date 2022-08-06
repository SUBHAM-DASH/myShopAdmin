import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserlistComponent } from './components/userlist/userlist.component';


@NgModule({
  declarations: [
    UserlistComponent
  ],
  imports: [
    CommonModule,
    UserListRoutingModule
  ]
})
export class UserListModule { }
