import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-cart',
  templateUrl: './mobile-cart.component.html',
  styleUrls: ['./mobile-cart.component.css']
})
export class MobileCartComponent {
  @Output() notifyToggleMobileCart = new EventEmitter;


  toggleMobileCart() {
    this.notifyToggleMobileCart.emit();
  }
}
