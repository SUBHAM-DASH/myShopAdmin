import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CkEditorComponent } from './components/ck-editor/ck-editor.component';
import { ImageCroperComponent } from './components/image-croper/image-croper.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MaterialUlModule } from '../material-ul/material-ul.module';

@NgModule({
  declarations: [
    CkEditorComponent,
    ImageCroperComponent
  ],
  imports: [
    CommonModule,
    CKEditorModule,
    ImageCropperModule,
    MaterialUlModule
  ],exports:[
    ImageCroperComponent
  ]
})
export class SharedModule { }
