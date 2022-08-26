import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


const materialUiComponentList: any[] = [
  MatToolbarModule,
  MatTooltipModule,
  MatCardModule,
  MatSidenavModule,
  MatTabsModule,
  MatInputModule,
  MatSelectModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [materialUiComponentList],
})
export class MaterialUiModule {}
