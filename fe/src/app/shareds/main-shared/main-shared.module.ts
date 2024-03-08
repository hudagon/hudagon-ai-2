import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent } from './components/overlay/overlay.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CategoryTagComponent } from './components/category-tag/category-tag.component';

@NgModule({
  declarations: [
    OverlayComponent,
    HamburgerComponent,
    SpinnerComponent,
    CategoryTagComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OverlayComponent, 
    HamburgerComponent, 
    SpinnerComponent,
    CategoryTagComponent
  ]
})
export class MainSharedModule { }
