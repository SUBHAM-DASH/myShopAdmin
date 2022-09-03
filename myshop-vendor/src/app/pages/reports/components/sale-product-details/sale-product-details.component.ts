import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-product-details',
  templateUrl: './sale-product-details.component.html',
  styleUrls: ['./sale-product-details.component.scss']
})
export class SaleProductDetailsComponent implements OnInit {

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
      name: {
        title: 'Name',
      },
      price: {
        title: 'Price',
      },
      discount: {
        title: 'Discount',
      },
    },
    actions:{
      position:'right'
    }
  };

  DataSource = [
    {
      id: 1,
      name: 'bike',
      price:234,
      discount: "23%"
    },
    {
      id: 2,
      name: 'car',
      price:2324,
      discount: "20%"
    },
    {
      id: 3,
      name: 'auto',
      price:534,
      discount: "24%"
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
