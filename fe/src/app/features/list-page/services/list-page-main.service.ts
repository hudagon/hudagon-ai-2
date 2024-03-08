import { Injectable } from '@angular/core';
import { CategoryTagListPage } from '../models/category-tag-list-page';

@Injectable({
  providedIn: 'root'
})
export class ListPageMainService {
  previewCategory: CategoryTagListPage | null = null;
  currentSearchCategoryTag: CategoryTagListPage[] = [];
  
  constructor() { }

  updatePreviewCategory(category: CategoryTagListPage) {
    this.previewCategory = category;
  }

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
            console.log("Chỉ cho phép tối đa 6 tiêu chí tìm kiếm (đã bao gồm tìm theo tên)");
            return false;
          }
        } else {
          if (this.currentSearchCategoryTag.length == 5) {
            console.log("Chỉ cho phép tối đa 6 tiêu chí tìm kiếm (đã bao gồm tìm theo tên)");
            return false;
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
}
