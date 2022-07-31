import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const materialUiModule = [
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, materialUiModule],
  exports: [materialUiModule],
})
export class MaterialUlModule {}
