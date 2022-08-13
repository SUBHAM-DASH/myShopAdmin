import { Component, OnInit } from '@angular/core';
import { VendorList } from '../../vendor-list';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatDialogComponent } from '../mat-dialog/mat-dialog.component';
import { EditDialogComponent } from 'src/app/pages/vendor-list/components/edit-dialog/edit-dialog.component';

const ELEMENT_DATA: VendorList[] = [
  {
    id: 1,
    name: 'Hydrogen',
    email: 'dash@gmail.com',
    mobile: 8968338733,
    status: false,
    barcode: 12343,
  },
  {
    id: 2,
    name: 'Helium',
    email: 'dash12@gmail.com',
    mobile: 8968378833,
    status: true,
    barcode: 4647,
  },
  {
    id: 3,
    name: 'Lithium',
    email: 'dash33@gmail.com',
    mobile: 8968538733,
    status: false,
    barcode: 8976,
  },
  {
    id: 4,
    name: 'Beryllium',
    email: 'subham12@gmail.com',
    mobile: 7876387383,
    status: false,
    barcode: 12893,
  },
  {
    id: 5,
    name: 'Boron',
    email: 'kumar23@gmail.com',
    mobile: 8868338733,
    status: true,
    barcode: 2343,
  },
  {
    id: 6,
    name: 'Carbon',
    email: 'subhamdash@gmail.com',
    mobile: 8968338733,
    status: true,
    barcode: 12393,
  },
  {
    id: 7,
    name: 'Nitrogen',
    email: 'subhamdash12@gmail.com',
    mobile: 89687838733,
    status: true,
    barcode: 12343,
  },
  {
    id: 8,
    name: 'Oxygen',
    email: 'dash@gmail.com',
    mobile: 8968338733,
    status: false,
    barcode: 12343,
  },
  {
    id: 9,
    name: 'Fluorine',
    email: 'dash@gmail.com',
    mobile: 8968338733,
    status: false,
    barcode: 12343,
  },
  {
    id: 10,
    name: 'Neon',
    email: 'dash@gmail.com',
    mobile: 8968338733,
    status: true,
    barcode: 12343,
  },
];

@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.scss'],
})
export class VendorlistComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'mobile',
    'barcode',
    'status',
    'edit',
    'delete',
  ];
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  //Open Dialog for enable and disable
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

  //Open Dialog For Delete
  openDialogForDelete(event: any, index: any) {
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
        this.dataSource = this.dataSource.filter((item) => {
          return item.id != event.id;
        });
      }
    });
  }

  //open dialog for edit
  openDialogForEdit(event: any) {
    let dialogRef = this.dialog.open(EditDialogComponent, {
      width: '60%',
      height: '320px',
      data: {
        email: event.email,
        name: event.name,
        barcode: event.barcode,
        mobile: event.mobile,
        status: event.status,
      },
    });
    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        //after Edit data sent to the api
        console.log(response);
      }
    });
  }

  //Enable and Disable function for enable and disable
  onChangeEnableDisable(event: any, obj: any, i: any) {
    this.openDialogForEnableAndDisable(event, obj, i);
  }

  //Delete function for  delete
  deleteVendorData(event: any, index: any) {
    this.openDialogForDelete(event, index);
  }

  //Edit function for edit
  editVendorData(event: any) {
    this.openDialogForEdit(event);
  }
}
