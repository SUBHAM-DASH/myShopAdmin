import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription-details',
  templateUrl: './subscription-details.component.html',
  styleUrls: ['./subscription-details.component.scss']
})
export class SubscriptionDetailsComponent implements OnInit {


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
      subscriberName: {
        title: 'Subscriber Name',
      },
      price: {
        title: 'Price',
      },
      date: {
        title: 'Date',
      },
    },
    actions:{
      position:'right'
    }
  };

  DataSource = [
    {
      id: 1,
      subscriberName: 'Subham',
      price:2,
      date: "3/5/2022"
    },
    {
      id: 2,
      subscriberName: 'Babu',
      price:3,
      category: "4/6/2022"
    },
    {
      id: 3,
      subscriberName: 'Bikash',
      price:4,
      date: "09/02/2022"
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
