import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ListPageRoutingModule } from './list-page-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { ListPageDesktopSideBarComponent } from './components/list-page-desktop-side-bar/list-page-desktop-side-bar.component';
import { ListPageTabletSideBarComponent } from './components/list-page-tablet-side-bar/list-page-tablet-side-bar.component';
import { MainSharedModule } from 'src/app/shareds/main-shared/main-shared.module';
import { ListPageDesktopBodyComponent } from './components/list-page-desktop-body/list-page-desktop-body.component';
import { DesktopCartDropdownComponent } from './components/list-page-desktop-body/desktop-cart-dropdown/desktop-cart-dropdown.component';
import { AuthModule } from 'src/app/auth/auth.module';
import { SubjectCategoryComponent } from './components/list-page-desktop-body/subject-category/subject-category.component';
import { StyleCategoryComponent } from './components/list-page-desktop-body/style-category/style-category.component';
import { RatioCategoryComponent } from './components/list-page-desktop-body/ratio-category/ratio-category.component';
import { ColorCategoryComponent } from './components/list-page-desktop-body/color-category/color-category.component';
import { TopicCategoryComponent } from './components/list-page-desktop-body/topic-category/topic-category.component';
import { TabletCartDropdownComponent } from './components/list-page-desktop-body/tablet-cart-dropdown/tablet-cart-dropdown.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ListPageDesktopSideBarComponent,
    ListPageTabletSideBarComponent,
    ListPageDesktopBodyComponent,
    DesktopCartDropdownComponent,
    SubjectCategoryComponent,
    StyleCategoryComponent,
    RatioCategoryComponent,
    ColorCategoryComponent,
    TopicCategoryComponent,
    TabletCartDropdownComponent,
  ],
  imports: [
    CommonModule,
    ListPageRoutingModule,
    MainSharedModule,
    AuthModule,
    FormsModule
  ],
})
export class ListPageModule { }
