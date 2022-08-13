import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserlistComponent } from './components/userlist/userlist.component';
import { MaterialUlModule } from 'src/app/material-ul/material-ul.module';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { MatDialogComponent } from './components/mat-dialog/mat-dialog.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';

@NgModule({
  declarations: [
    UserlistComponent,
    UserDetailComponent,
    MatDialogComponent,
    EditDialogComponent
  ],
  imports: [
    CommonModule,
    UserListRoutingModule,
    MaterialUlModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserListModule { }
