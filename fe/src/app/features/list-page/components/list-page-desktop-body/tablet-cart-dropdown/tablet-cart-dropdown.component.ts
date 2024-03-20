import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tablet-cart-dropdown',
  templateUrl: './tablet-cart-dropdown.component.html',
  styleUrls: ['./tablet-cart-dropdown.component.css']
})
export class TabletCartDropdownComponent implements OnInit {
  @Output() notifyToggleTabletDropDown = new EventEmitter();
  isContentLoaded: boolean = false;

  ngOnInit(): void {
    this.isContentLoaded = false;
    setTimeout(() => {
      this.isContentLoaded = true;
    }, 1200);
  }

  toggleTabletDropDown() {
    this.notifyToggleTabletDropDown.emit();
  }
}
