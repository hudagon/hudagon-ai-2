import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailPageRoutingModule } from './detail-page-routing.module';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    DetailPageRoutingModule
  ]
})
export class DetailPageModule { }
