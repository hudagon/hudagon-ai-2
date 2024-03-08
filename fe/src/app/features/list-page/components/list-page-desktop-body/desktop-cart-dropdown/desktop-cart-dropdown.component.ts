import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop-cart-dropdown',
  templateUrl: './desktop-cart-dropdown.component.html',
  styleUrls: ['./desktop-cart-dropdown.component.css']
})
export class DesktopCartDropdownComponent implements OnInit {
  isContentLoaded: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.isContentLoaded = true;
    }, 3000);
  }
}
