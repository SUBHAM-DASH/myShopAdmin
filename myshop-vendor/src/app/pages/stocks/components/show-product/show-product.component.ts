import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss'],
})
export class ShowProductComponent implements OnInit {
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
        title: 'Full Name',
      },
      username: {
        title: 'User Name',
      },  
      email: {
        title: 'Email',   
      },
    },
    actions:{
      position:'right'
    }
  };

  DataSource = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

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
