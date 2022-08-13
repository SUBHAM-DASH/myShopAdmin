import { UserListService } from './../../user-list.service';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.scss'],
})
export class MatDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<MatDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private _userList: UserListService
  ) {}

  ngOnInit(): void {}

  //Cancel The Dialog
  onCancel() {
    this.dialogRef.close(false);
  }
}
