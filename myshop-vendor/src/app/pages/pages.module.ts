import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PageComponent } from './components/page/page.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialUiModule
  ]
})
export class PagesModule { }
