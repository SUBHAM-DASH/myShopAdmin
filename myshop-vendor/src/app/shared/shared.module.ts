import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImageCroperComponent } from './components/image-croper/image-croper.component';


@NgModule({
  declarations: [
    ImageCroperComponent
  ],
  imports: [
    CommonModule,
    ImageCropperModule,
  ],exports:[ImageCroperComponent]
})
export class SharedModule { }
