import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent } from './components/overlay/overlay.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CategoryTagComponent } from './components/category-tag/category-tag.component';
import { ToastComponent } from './components/toast/toast.component';
import { ModalComponent } from './components/modal/modal.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [
    OverlayComponent,
    HamburgerComponent,
    SpinnerComponent,
    CategoryTagComponent,
    ToastComponent,
    ModalComponent,
    CapitalizePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OverlayComponent, 
    HamburgerComponent, 
    SpinnerComponent,
    CategoryTagComponent,
    ToastComponent,
    ModalComponent,
    CapitalizePipe
  ]
})
export class MainSharedModule { }
