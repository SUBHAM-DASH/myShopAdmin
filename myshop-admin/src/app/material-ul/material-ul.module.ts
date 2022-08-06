import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';

const materialUiModule = [
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule,
  MatSidenavModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, materialUiModule],
  exports: [materialUiModule],
})
export class MaterialUlModule {}
