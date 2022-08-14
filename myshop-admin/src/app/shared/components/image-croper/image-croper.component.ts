import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image-croper',
  templateUrl: './image-croper.component.html',
  styleUrls: ['./image-croper.component.scss']
})
export class ImageCroperComponent implements OnInit {

  @Input() imageChangedEvent:any;
  @Output() imageEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  imageCropped(event:any){
    this.imageEvent.emit(event);
  }

}
