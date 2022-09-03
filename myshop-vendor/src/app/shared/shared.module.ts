import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImageCroperComponent } from './components/image-croper/image-croper.component';
import { CustomSmartTableComponent } from './components/custom-smart-table/custom-smart-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    ImageCroperComponent,
    CustomSmartTableComponent
  ],
  imports: [
    CommonModule,
    ImageCropperModule,
    Ng2SmartTableModule
  ],exports:[ImageCroperComponent,CustomSmartTableComponent]
})
export class SharedModule { }
