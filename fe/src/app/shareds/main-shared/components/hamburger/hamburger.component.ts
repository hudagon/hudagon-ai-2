import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MainSharedService } from '../../main-shared.service';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent implements OnInit {
  @Output() notifyToggleTabletHamburger = new EventEmitter();

  constructor(
    private mainSharedService: MainSharedService
  ) {
  }
  
  ngOnInit(): void {
  }

  isHamburgerToggle() {
    return this.mainSharedService.isHamburgerToggled;
  }
  
  toggleHamburger() {
    this.mainSharedService.isHamburgerToggled = !this.mainSharedService.isHamburgerToggled;
    this.notifyToggleTabletHamburger.emit();
  }
}
