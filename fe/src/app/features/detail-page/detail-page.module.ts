import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailPageRoutingModule } from './detail-page-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MainSharedModule } from 'src/app/shareds/main-shared/main-shared.module';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    DetailPageRoutingModule,
    MainSharedModule
  ]
})
export class DetailPageModule { }
