import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit, AfterViewInit {
  @ViewChild('input') myInput!: ElementRef;
  hideSpinner: boolean = false;
  formGroup!: FormGroup;
  selectedValue: any;
  ImageChangedEvent: any = '';
  croppedImage: any = '';
  fileData:any;

  category: any[] = [
    { value: '1', viewValue: 'Steak' },
    { value: '2', viewValue: 'Pizza' },
    { value: '3', viewValue: 'Tacos' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      productName: ['', [Validators.required]],
      productCategory: ['', [Validators.required]],
      price: ['', [Validators.required]],
      barcode: ['', [Validators.required]],
    });
  }

  ngAfterViewInit(): void {
    const searchTerm = fromEvent(this.myInput.nativeElement, 'keyup').pipe(
      map((event: any) => event.target.value),
      debounceTime(2000),
      distinctUntilChanged()
    );
    searchTerm.subscribe((res: any) => {
      this.hideSpinner = true;
      console.log(res);
      setTimeout(() => {
        this.hideSpinner = false;
      }, 2000);
      //here call the api
    });
  }

  //event for image
  fileChangeEvent(event: any) {
    // console.log(event.target.files);
    this.ImageChangedEvent = event;
    this.fileData = event.target.files;
  }

  imageCroper(event:ImageCroppedEvent){
    this.croppedImage = event.base64;
  }

  //submit the form
  onClickProductData() {
    console.log(this.formGroup.value);
    const formData = new FormData();

    for (const data in this.formGroup.value) {
      formData.append(data,this.formGroup.value[data]);
    }
    formData.append('imageFile',this.fileData);

    //api call and the data send to the server

  }
}
