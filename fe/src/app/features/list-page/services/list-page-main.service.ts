import { Injectable } from '@angular/core';
import { CategoryTagListPage } from '../models/category-tag-list-page';

@Injectable({
  providedIn: 'root'
})
export class ListPageMainService {
  currentSearchCategoryTag: CategoryTagListPage[] = [];
  categorySubjectLevel2Current: number = 0;

  constructor() { }

  updateCurrentSearchCategoryTag(category: CategoryTagListPage) {
    if (category.id == -2) {
      const existingSearchIndex = this.currentSearchCategoryTag.findIndex(t => t.id === -2);
      if (existingSearchIndex !== -1) {
        this.currentSearchCategoryTag.shift();
      }
      this.currentSearchCategoryTag.unshift(category);
    } else {

      if (this.currentSearchCategoryTag.length != 0) {
        if (this.currentSearchCategoryTag[0].id == -2) {
          if (this.currentSearchCategoryTag.length == 6) {
            return false;
          }
        } else {
          if (this.currentSearchCategoryTag.length == 5) {
            return false;
          }
        }
      }

      for (let i = 0; i < this.currentSearchCategoryTag.length; i++) {
        if (this.currentSearchCategoryTag[i].id == 0 || this.currentSearchCategoryTag[i].name.includes("Khác")) {
          if (this.currentSearchCategoryTag[i].level2Id == category.level2Id) {
            this.clearCurrentSearchCategoryTag(this.currentSearchCategoryTag[i].level2Id + "");
            break;
          }
        }
      }

      this.currentSearchCategoryTag.push(category);
    }
    return true;
  }

  toggleTagFromCurrentSearchCategoryTag(category: CategoryTagListPage) {
    const index = this.currentSearchCategoryTag.findIndex(tag => tag.id === category.id);
    if (index !== -1) {
      this.currentSearchCategoryTag.splice(index, 1);
    } else {
      this.updateCurrentSearchCategoryTag(category);
    }
  }

  clearCurrentSearchCategoryTag(mode: string) {
    switch (mode) {
      case "all":
        this.currentSearchCategoryTag = [];
        break;
      case "except_search":
        if (this.currentSearchCategoryTag.length != 0 && this.currentSearchCategoryTag[0].level2Id == -2) {
          this.currentSearchCategoryTag = [this.currentSearchCategoryTag[0]];
        } else {
          this.currentSearchCategoryTag = [];
        }
        break;
      default:
        const modeAsNumber = +mode;
        if (!isNaN(modeAsNumber)) {
          this.currentSearchCategoryTag = this.currentSearchCategoryTag.filter(tag => tag.level2Id !== modeAsNumber);
        }
        break;
    }
  }
}
