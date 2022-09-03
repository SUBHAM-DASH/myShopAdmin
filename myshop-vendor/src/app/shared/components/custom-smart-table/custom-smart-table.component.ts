import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-smart-table',
  templateUrl: './custom-smart-table.component.html',
  styleUrls: ['./custom-smart-table.component.scss'],
})
export class CustomSmartTableComponent implements OnInit {
  // settings = {
  //   mode: 'internal',
  //   delete: {
  //     confirmDelete: true,
  //   },
  //   add: {
  //     confirmCreate: true,
  //   },
  //   edit: {
  //     confirmSave: true,
  //   },
  //   columns: {
  //     id: {
  //       title: 'ID',
  //     },
  //     name: {
  //       title: 'Full Name',
  //     },
  //     username: {
  //       title: 'User Name',
  //     },
  //     email: {
  //       title: 'Email',
  //     },
  //   },
  //   actions:{
  //     position:'right'
  //   }
  // };

  // DataSource = [
  //   {
  //     id: 1,
  //     name: 'Leanne Graham',
  //     username: 'Bret',
  //     email: 'Sincere@april.biz',
  //   },
  //   {
  //     id: 2,
  //     name: 'Ervin Howell',
  //     username: 'Antonette',
  //     email: 'Shanna@melissa.tv',
  //   },
  //   {
  //     id: 11,
  //     name: 'Nicholas DuBuque',
  //     username: 'Nicholas.Stanton',
  //     email: 'Rey.Padberg@rosamond.biz',
  //   },
  // ];

  @Input() settings!: any;
  @Input() DataSource: any;

  @Output() onRoleDelete: EventEmitter<any> = new EventEmitter();
  @Output() onCreate: EventEmitter<any> = new EventEmitter();
  @Output() onEditConfirm: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClickEdit(event:any){
    this.onEditConfirm.emit(event);
  }

  onClickDelete(event:any){
    this.onRoleDelete.emit(event);
  }

  onClickCreate(event:any){
    this.onCreate.emit(event);
  }

}
