import { Injectable } from '@angular/core';
import { CategoryTagListPage } from '../models/category-tag-list-page';
import { ListPageMobileComponent } from '../components/list-page-mobile/list-page-mobile.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListPageMainService {
  currentSearchCategoryTag: CategoryTagListPage[] = [];
  categorySubjectLevel2Current: number = 0;
  categorySubjectLevel1Current: number = 0;
  private triggerSearchPainting = new Subject<void>()
  triggerSearchPainting$ = this.triggerSearchPainting.asObservable();

  searchPainting() {
    this.triggerSearchPainting.next();
  }

  // MOBILE CATEGORY USAGE
  listPageMobileComponent: any = ListPageMobileComponent;
  categorySubjectLevel1CurrentName: string = "";
  categorySubjectLevel2CurrentName: string = "";
  categorySubjectLevel3CurrentName: string = "";
  categoryMobileLevel1CurrentId: number = 0;
  categoryMobileLevel2CurrentId: number = 0;
  mobileCategoryCurrentLevel: number = 1;
  categoryBreadCrump: string[] = [
    this.categorySubjectLevel1CurrentName, 
    this.categorySubjectLevel2CurrentName, 
    this.categorySubjectLevel3CurrentName
  ];

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
          if (this.currentSearchCategoryTag[i].level2CategoryId == category.level2CategoryId) {
            this.clearCurrentSearchCategoryTag(this.currentSearchCategoryTag[i].level2CategoryId + "", null);
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

  clearCurrentSearchCategoryTag(mode: string, value: any) {
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
      case "clearLevel1":
        this.currentSearchCategoryTag = this.currentSearchCategoryTag.filter(tag => tag.level1CategoryId !== value);
        break;
      default:
        const modeAsNumber = +mode;
        if (!isNaN(modeAsNumber)) {
          this.currentSearchCategoryTag = this.currentSearchCategoryTag.filter(tag => tag.level2CategoryId !== modeAsNumber);
        }
        break;
    }
  }

  transformCategoryListWithLevels(categoryListRaw: any[]) {
    const result = [];

    for (let i = 0; i < categoryListRaw.length; i++) {
      const curr = categoryListRaw[i];
      const level3Item = {
        id: curr.id,
        name: curr.name,
        categoryDesc: curr.categoryDesc,
        level1CategoryId: curr.level1CategoryId
      };

      const index = result.findIndex(item => item.level2CategoryId === curr.level2CategoryId);

      if (index === -1) {
        result.push({
          level2CategoryId: curr.level2CategoryId,
          level2CategoryName: curr.level2CategoryName,
          level1CategoryId: curr.level1CategoryId,
          level3List: [level3Item]
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

  /*#region MOBILE CATEGORY TAG */
  updateBreadcrump() {
    this.categoryBreadCrump = [
      this.categorySubjectLevel1CurrentName, 
      this.categorySubjectLevel2CurrentName, 
      this.categorySubjectLevel3CurrentName
    ];
  }

  getBreadcrump() {
    let breadcrumbWithSlashes: (string | null)[] = [];

    for (let i = 0; i < this.categoryBreadCrump.length; i++) {
      if (this.categoryBreadCrump[i] == "") {
        continue;
      }
      breadcrumbWithSlashes.push("/");
      breadcrumbWithSlashes.push(this.categoryBreadCrump[i]);
    }

    return breadcrumbWithSlashes;
  }

  moveToSpecific(destination: any) {
    const level = this.categoryBreadCrump.indexOf(destination);
    if (level == 0) {
      this.mobileCategoryCurrentLevel = 2;
      this.categorySubjectLevel2CurrentName = "";
      this.updateBreadcrump();
    }
  }
  /*#endregion*/
}
