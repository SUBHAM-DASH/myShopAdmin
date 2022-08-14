import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { type } from '../../type';

@Component({
  selector: 'app-email-template',
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.scss'],
})
export class EmailTemplateComponent implements OnInit {
  formGroup!: FormGroup;

  emailType = type.emailType;

  public Editor = ClassicEditor;
  editorData!: any;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  filesData: any = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      type: ['', [Validators.required]],
      url: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      image: [''],
      textEditorContent: [''],
    });
  }

  //Submit the form
  onSubmit() {    
    const formData = new FormData();
    formData.append('type', this.formGroup.value.type);
    formData.append('url', this.formGroup.value.url);
    formData.append('subject', this.formGroup.value.subject);
    formData.append('image', this.filesData);
    formData.append(
      'textEditorContent',
      this.formGroup.value.textEditorContent
    );

    //next step to call the api and the data to server
    console.log(formData);
  }

  //Reset the form
  onReset() {
    this.formGroup.reset();
    this.imageChangedEvent = null;
    this.croppedImage = null;
  }

  //for ck-editor
  onChange({ editor }: ChangeEvent) {
    this.editorData = editor.getData();
  }

  //for image-croper event move to child
  fileChangeEvent(event: any) {
    this.imageChangedEvent = event;
    this.filesData = event.target.files;
  }

  //image croper data receive from child through output decorator only (binary format data)
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
}
