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
import { ListPageMobileComponent } from './components/list-page-mobile/list-page-mobile.component';
import { MobileCartComponent } from './components/list-page-mobile/mobile-cart/mobile-cart.component';
import { MobileCategoryTagComponent } from './components/list-page-mobile/mobile-category-tag/mobile-category-tag.component';
import { MobileLevel1CategoryComponent } from './components/list-page-mobile/mobile-category-tag/mobile-level1-category/mobile-level1-category.component';
import { MobileLevel2CategoryComponent } from './components/list-page-mobile/mobile-category-tag/mobile-level2-category/mobile-level2-category.component';
import { MobileLevel2CategorySubjectComponent } from './components/list-page-mobile/mobile-category-tag/mobile-level2-category/mobile-level2-category-subject/mobile-level2-category-subject.component';
import { MobileLevel2CategoryTopicComponent } from './components/list-page-mobile/mobile-category-tag/mobile-level2-category/mobile-level2-category-topic/mobile-level2-category-topic.component';
import { MobileLevel2CategoryStyleComponent } from './components/list-page-mobile/mobile-category-tag/mobile-level2-category/mobile-level2-category-style/mobile-level2-category-style.component';
import { MobileLevel2CategoryRatioComponent } from './components/list-page-mobile/mobile-category-tag/mobile-level2-category/mobile-level2-category-ratio/mobile-level2-category-ratio.component';
import { MobileLevel2CategoryColorComponent } from './components/list-page-mobile/mobile-category-tag/mobile-level2-category/mobile-level2-category-color/mobile-level2-category-color.component';

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
    ListPageMobileComponent,
    MobileCartComponent,
    MobileCategoryTagComponent,
    MobileLevel1CategoryComponent,
    MobileLevel2CategoryComponent,
    MobileLevel2CategorySubjectComponent,
    MobileLevel2CategoryTopicComponent,
    MobileLevel2CategoryStyleComponent,
    MobileLevel2CategoryRatioComponent,
    MobileLevel2CategoryColorComponent,
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
