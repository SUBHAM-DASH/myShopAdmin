import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sold-product-details',
  templateUrl: './sold-product-details.component.html',
  styleUrls: ['./sold-product-details.component.scss']
})
export class SoldProductDetailsComponent implements OnInit {

  settings = {
    mode: 'internal',
    delete: {
      confirmDelete: true,
    },
    add: {
      confirmCreate: true,
    },
    edit: {
      confirmSave: true,
    },
    columns: {
      id: {
        title: 'ID',
      },
      productName: {
        title: 'Product Name',
      },
      price: {
        title: 'Price',
      },
      category: {
        title: 'Category',
      },
    },
    actions:{
      position:'right'
    }
  };

  DataSource = [
    {
      id: 1,
      productName: 'jeans',
      price:2,
      category: "1st"
    },
    {
      id: 2,
      productName: 'shirt',
      price:23,
      category: "2nd"
    },
    {
      id: 3,
      productName: 'chadi',
      price:4,
      category: "3rd"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRoleDelete(event: any) {
    console.log('Delete Event In Console');
    console.log(event);
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreate(event: any) {
    console.log('Create Event In Console');
    console.log(event);
  }

  onEditConfirm(event: any) {
    if (window.confirm('Are you sure you want to save?')) {
      console.log(event);
      //call to remote api, remember that you have to await this
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

}
