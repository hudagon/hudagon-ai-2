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
        if (this.currentSearchCategoryTag[i].id == 0 || this.currentSearchCategoryTag[i].name.includes("other")) {
          if (this.currentSearchCategoryTag[i].level2CategoryId == category.level2CategoryId) {
            this.clearCurrentSearchCategoryTag(this.currentSearchCategoryTag[i].level2CategoryId + "");
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
        if (this.currentSearchCategoryTag.length != 0 && this.currentSearchCategoryTag[0].level2CategoryId == -2) {
          this.currentSearchCategoryTag = [this.currentSearchCategoryTag[0]];
        } else {
          this.currentSearchCategoryTag = [];
        }
        break;
      default:
        console.log("vô 2", mode);
        const modeAsNumber = +mode;
        if (!isNaN(modeAsNumber)) {
          this.currentSearchCategoryTag = this.currentSearchCategoryTag.filter(tag => tag.level2CategoryId !== modeAsNumber);
        }
        break;
    }
  }

  transformCategoryListWithLoop(categorySubjectListRaw: any[]) {
    const result = [];
    for (let i = 0; i < categorySubjectListRaw.length; i++) {
      const curr = categorySubjectListRaw[i];
      const level3Item = { id: curr.id, name: curr.name, categoryDesc: curr.categoryDesc };
      const index = result.findIndex(item => item.level2CategoryId === curr.level2CategoryId);

      if (index === -1) {
        const level3List = curr.name.toLowerCase().includes("other") ? [level3Item] : [level3Item];

        result.push({
          level2CategoryId: curr.level2CategoryId,
          level2CategoryName: curr.level2CategoryName,
          level3List: level3List
        });
      } else {
        if (curr.name.toLowerCase().includes("other")) {
          result[index].level3List.unshift(level3Item);
        } else {
          result[index].level3List.push(level3Item);
        }
      }
    }

    return result;
  }
}
