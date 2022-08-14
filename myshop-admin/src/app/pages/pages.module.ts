import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PageComponent } from './components/page/page.component';
import { MaterialUlModule } from '../material-ul/material-ul.module';


@NgModule({
  declarations: [
    PageComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialUlModule,
  ]
})
export class PagesModule { }
