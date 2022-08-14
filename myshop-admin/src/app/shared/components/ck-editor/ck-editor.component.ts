import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-ck-editor',
  templateUrl: './ck-editor.component.html',
  styleUrls: ['./ck-editor.component.scss']
})
export class CkEditorComponent implements OnInit {

  public Editor = ClassicEditor;
  editorData!:any;

  @Output() editData = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onChange({ editor }: ChangeEvent) {
    this.editorData = editor.getData();
    this.editData.emit(this.editorData);
  }

}
