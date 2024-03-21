import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-category-tag',
  templateUrl: './mobile-category-tag.component.html',
  styleUrls: ['./mobile-category-tag.component.css']
})
export class MobileCategoryTagComponent {
  @Output() notifyToggleMobileCategoryTag = new EventEmitter;


  toggleMobileCategoryTag() {
    this.notifyToggleMobileCategoryTag.emit();
  }
}
