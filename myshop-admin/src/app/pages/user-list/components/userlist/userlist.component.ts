import { Component, OnInit } from '@angular/core';
import { MatDialogComponent } from '../mat-dialog/mat-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserListService } from '../../user-list.service';
import { UserList } from '../../user-list';

const ELEMENT_DATA: UserList[] = [
  {
    id: 1,
    name: 'Hydrogen',
    rool: 1.0079,
    mobile: 9090784647,
    email: 'dashsubham095@gmail.com',
    status: false,
  },
  {
    id: 2,
    name: 'Helium',
    rool: 4.0026,
    mobile: 9090774647,
    email: 'dashsubham095@gmail.com',
    status: true,
  },
  {
    id: 3,
    name: 'Lithium',
    rool: 6.941,
    mobile: 8093246657,
    email: 'dashsubham095@gmail.com',
    status: false,
  },
  {
    id: 4,
    name: 'Beryllium',
    rool: 9.0122,
    mobile: 90783783373,
    email: 'dashsubham095@gmail.com',
    status: true,
  },
  {
    id: 5,
    name: 'Boron',
    rool: 10.811,
    mobile: 8909653763,
    email: 'dashsubham095@gmail.com',
    status: false,
  },
  {
    id: 6,
    name: 'Carbon',
    rool: 12.0107,
    mobile: 38373838387,
    email: 'dashsubham095@gmail.com',
    status: true,
  },
  {
    id: 7,
    name: 'Nitrogen',
    rool: 14.0067,
    mobile: 8089673563,
    email: 'dashsubham095@gmail.com',
    status: false,
  },
  {
    id: 8,
    name: 'Oxygen',
    rool: 15.9994,
    mobile: 89077835333,
    email: 'dashsubham095@gmail.com',
    status: true,
  },
  {
    id: 9,
    name: 'Fluorine',
    rool: 18.9984,
    mobile: 90905284647,
    email: 'dashsubham095@gmail.com',
    status: true,
  },
  {
    id: 10,
    name: 'Neon',
    rool: 20.1797,
    mobile: 89063373762,
    email: 'dashsubham095@gmail.com',
    status: true,
  },
];

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
})
export class UserlistComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'rool',
    'mobile',
    'email',
    'edit',
    'delete',
    'status',
  ];
  dataSource = ELEMENT_DATA;
  checked: boolean = false;

  constructor(public dialog: MatDialog, private _userList: UserListService) {}

  ngOnInit(): void {}

  //open dialog for enable and disable
  openDialogForEnableAndDisable(event: any, objData: any, index: any) {
    let dialogRef = this.dialog.open(MatDialogComponent, {
      width: '250px',
      data: {
        mainData: !event.checked
          ? 'Would You Like to Disable?'
          : 'Would You Like to Enable?',
      },
    });
    event.source.checked = objData.status;
    dialogRef.afterClosed().subscribe((response) => {
      if (response == true) {
        this.dataSource[index].status = event.source.checked =
          !event.source.checked;

          //here the api call
      }
    });
  }

  //open dialog for delete
  openDialogForDelte(event: any, index: any) {
    let dialogRef = this.dialog.open(MatDialogComponent, {
      width: '250px',
      data: {
        mainData: event ? 'Would You Like to Delete?' : '',
      },
    });
    dialogRef.afterClosed().subscribe((response) => {
      if (response == true) {
        //api should fix here
        console.log('deleted successfully', index);
        //temporayly deleted that
        this.dataSource = this.dataSource.filter((item, i) => {
          return item.id != event.id;
        });
      }
    });
  }

  //open dialog for edit
  openDialogForEdit(event: any) {
    let dialogRef = this.dialog.open(EditDialogComponent, {
      width: '60%',
      height:'300px',
      data: {
        email: event.email,
        name: event.name,
        roll: event.rool,
        mobile: event.mobile,
        status:event.status
      },
    });
    dialogRef.afterClosed().subscribe((response)=>{
      if(response){
        //after Edit data sent to the api
        console.log(response);
      }
    });
  }

  //Enable and Desable User data
  onChangeEnableDisable(event: any, obj: any, index: any) {
    this.openDialogForEnableAndDisable(event, obj, index);
  }

  //Delete User Data
  deleteUserData(event: any, index: any) {
    this.openDialogForDelte(event, index);
  }

  //Edit User Data
  editUserData(event: any) {
    this.openDialogForEdit(event);
  }
}
