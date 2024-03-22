import { Component, EventEmitter, Output } from '@angular/core';
import { ListPageMainService } from '../../../services/list-page-main.service';

@Component({
  selector: 'app-mobile-category-tag',
  templateUrl: './mobile-category-tag.component.html',
  styleUrls: ['./mobile-category-tag.component.css']
})
export class MobileCategoryTagComponent {
  @Output() notifyToggleMobileCategoryTag = new EventEmitter;

  constructor(
    private listPageMainService: ListPageMainService
  ) {}

  toggleMobileCategoryTag() {
    this.notifyToggleMobileCategoryTag.emit();
  }

  getBreadcumpWithSlashes() {
    return this.listPageMainService.getBreadcrump();
  }
}
