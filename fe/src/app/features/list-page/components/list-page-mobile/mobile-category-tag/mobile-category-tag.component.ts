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

  getCurrentCategoryLevel() {
    return this.listPageMainService.mobileCategoryCurrentLevel;
  }

  mobileBackCategory() {
    const mobileCurrentCategoryLevel = this.listPageMainService.mobileCategoryCurrentLevel;

    if (mobileCurrentCategoryLevel > 1) {
      if (mobileCurrentCategoryLevel == 2) {
        this.listPageMainService.categorySubjectLevel1CurrentName = "";
        this.listPageMainService.categorySubjectLevel2CurrentName = "";
        this.listPageMainService.categorySubjectLevel3CurrentName = "";
      } 

      if (mobileCurrentCategoryLevel == 3) {
        this.listPageMainService.categorySubjectLevel2CurrentName = "";
        this.listPageMainService.categorySubjectLevel3CurrentName = "";
      }

      this.listPageMainService.updateBreadcrump();
      this.listPageMainService.mobileCategoryCurrentLevel = this.listPageMainService.mobileCategoryCurrentLevel - 1;
    }
  }

  moveToFirst() {
    const mobileCurrentCategoryLevel = this.listPageMainService.mobileCategoryCurrentLevel;
    if (mobileCurrentCategoryLevel == 1) {
      return;
    }

    this.mobileBackCategory();
    this.moveToFirst();
  }

  moveToSpecific(destination: any) {
    this.listPageMainService.moveToSpecific(destination);
  }
}
