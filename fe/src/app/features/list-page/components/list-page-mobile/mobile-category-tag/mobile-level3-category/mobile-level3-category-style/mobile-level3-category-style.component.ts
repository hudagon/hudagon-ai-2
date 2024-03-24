import { Component, OnInit } from '@angular/core';
import { CategoryTagListPage } from 'src/app/features/list-page/models/category-tag-list-page';
import { ListPageMainService } from 'src/app/features/list-page/services/list-page-main.service';
import { ToastService } from 'src/app/shareds/main-shared/services/toast.service';

@Component({
  selector: 'app-mobile-level3-category-style',
  templateUrl: './mobile-level3-category-style.component.html',
  styleUrls: ['./mobile-level3-category-style.component.css']
})
export class MobileLevel3CategoryStyleComponent implements OnInit {
  categoryStyleListRaw: any[] = [];
  categoryStyleList: any[] = [];
  categoryMobileLevel2CurrentId: number = 0;
  dictionary: { [key: string]: string } = {
    'material': 'Chất liệu',
    'school': 'Trường phái',
    'vietnam': 'Hoạ sĩ Việt Nam',
    'foreign': 'Hoạ sĩ thế giới',
    '': ''
  };

  constructor(
    private listPageMainService: ListPageMainService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.categoryStyleListRaw = [
      { "id": 61, "name": "style_1_1", "categoryDesc": "", "level2CategoryId": 7, "level2CategoryName": "style_1", "level1CategoryId": 3 },
      { "id": 62, "name": "style_1_2", "categoryDesc": "", "level2CategoryId": 7, "level2CategoryName": "style_1", "level1CategoryId": 3 },
      { "id": 63, "name": "style_1_3", "categoryDesc": "", "level2CategoryId": 7, "level2CategoryName": "style_1", "level1CategoryId": 3 },
      { "id": 64, "name": "style_1_4", "categoryDesc": "", "level2CategoryId": 7, "level2CategoryName": "style_1", "level1CategoryId": 3 },
      { "id": 65, "name": "style_1_5", "categoryDesc": "", "level2CategoryId": 7, "level2CategoryName": "style_1", "level1CategoryId": 3 },
      { "id": 66, "name": "style_1_6", "categoryDesc": "", "level2CategoryId": 7, "level2CategoryName": "style_1", "level1CategoryId": 3 },
      { "id": 67, "name": "style_1_7", "categoryDesc": "", "level2CategoryId": 7, "level2CategoryName": "style_1", "level1CategoryId": 3 },
      { "id": 68, "name": "style_1_8", "categoryDesc": "", "level2CategoryId": 7, "level2CategoryName": "style_1", "level1CategoryId": 3 },
      { "id": 69, "name": "style_1_9", "categoryDesc": "", "level2CategoryId": 7, "level2CategoryName": "style_1", "level1CategoryId": 3 },
      { "id": 70, "name": "style_1_other", "categoryDesc": "", "level2CategoryId": 7, "level2CategoryName": "style_1", "level1CategoryId": 3 },
      { "id": 71, "name": "style_2_1", "categoryDesc": "material", "level2CategoryId": 8, "level2CategoryName": "style_2", "level1CategoryId": 3 },
      { "id": 72, "name": "style_2_2", "categoryDesc": "school", "level2CategoryId": 8, "level2CategoryName": "style_2", "level1CategoryId": 3 },
      { "id": 73, "name": "style_2_3", "categoryDesc": "material", "level2CategoryId": 8, "level2CategoryName": "style_2", "level1CategoryId": 3 },
      { "id": 74, "name": "style_2_4", "categoryDesc": "school", "level2CategoryId": 8, "level2CategoryName": "style_2", "level1CategoryId": 3 },
      { "id": 75, "name": "style_2_5", "categoryDesc": "material", "level2CategoryId": 8, "level2CategoryName": "style_2", "level1CategoryId": 3 },
      { "id": 76, "name": "style_2_6", "categoryDesc": "school", "level2CategoryId": 8, "level2CategoryName": "style_2", "level1CategoryId": 3 },
      { "id": 77, "name": "style_2_7", "categoryDesc": "material", "level2CategoryId": 8, "level2CategoryName": "style_2", "level1CategoryId": 3 },
      { "id": 78, "name": "style_2_8", "categoryDesc": "school", "level2CategoryId": 8, "level2CategoryName": "style_2", "level1CategoryId": 3 },
      { "id": 79, "name": "style_2_9", "categoryDesc": "material", "level2CategoryId": 8, "level2CategoryName": "style_2", "level1CategoryId": 3 },
      { "id": 80, "name": "style_2_other", "categoryDesc": "material", "level2CategoryId": 8, "level2CategoryName": "style_2", "level1CategoryId": 3 },
      { "id": 81, "name": "style_2_other", "categoryDesc": "school", "level2CategoryId": 8, "level2CategoryName": "style_2", "level1CategoryId": 3 },
      { "id": 82, "name": "style_3_1", "categoryDesc": "vietnam", "level2CategoryId": 9, "level2CategoryName": "style_3", "level1CategoryId": 3 },
      { "id": 83, "name": "style_3_2", "categoryDesc": "foreign", "level2CategoryId": 9, "level2CategoryName": "style_3", "level1CategoryId": 3 },
      { "id": 84, "name": "style_3_3", "categoryDesc": "vietnam", "level2CategoryId": 9, "level2CategoryName": "style_3", "level1CategoryId": 3 },
      { "id": 85, "name": "style_3_4", "categoryDesc": "foreign", "level2CategoryId": 9, "level2CategoryName": "style_3", "level1CategoryId": 3 },
      { "id": 86, "name": "style_3_5", "categoryDesc": "vietnam", "level2CategoryId": 9, "level2CategoryName": "style_3", "level1CategoryId": 3 },
      { "id": 87, "name": "style_3_6", "categoryDesc": "foreign", "level2CategoryId": 9, "level2CategoryName": "style_3", "level1CategoryId": 3 },
      { "id": 88, "name": "style_3_7", "categoryDesc": "vietnam", "level2CategoryId": 9, "level2CategoryName": "style_3", "level1CategoryId": 3 },
      { "id": 89, "name": "style_3_8", "categoryDesc": "foreign", "level2CategoryId": 9, "level2CategoryName": "style_3", "level1CategoryId": 3 },
      { "id": 90, "name": "style_3_9", "categoryDesc": "vietnam", "level2CategoryId": 9, "level2CategoryName": "style_3", "level1CategoryId": 3 },
      { "id": 91, "name": "style_3_other", "categoryDesc": "vietnam", "level2CategoryId": 9, "level2CategoryName": "style_3", "level1CategoryId": 3 },
      { "id": 92, "name": "style_3_other", "categoryDesc": "foreign", "level2CategoryId": 9, "level2CategoryName": "style_3", "level1CategoryId": 3 }
    ];

    this.categoryStyleList = this.listPageMainService.transformCategoryListWithLevels(this.categoryStyleListRaw);
    this.categoryMobileLevel2CurrentId = this.listPageMainService.categoryMobileLevel2CurrentId;
  }

  toggleToFilter($event: any, category: CategoryTagListPage) {
    const currentTags = this.getCurrentSearchCategoryTag();
    const index = currentTags.findIndex(tag => tag.id === category.id && tag.level2CategoryId == category.level2CategoryId);
    if (index !== -1) {
      currentTags.splice(index, 1);
      $event.currentTarget.classList.toggle('activated');
      this.listPageMainService.searchPainting();
    } else {

      this.listPageMainService.clearCurrentSearchCategoryTag("clearLevel1", category.level1CategoryId);
      this.removeActivatedCSS();

      const addSuccessFully = this.listPageMainService.updateCurrentSearchCategoryTag(category);
      if (!addSuccessFully) {
        this.toastService.showToast("warning", "Giới hạn tìm kiếm", "Chỉ có thể tìm kiếm tối đa theo 5 thẻ");
      } else {
        this.listPageMainService.searchPainting();
        $event.currentTarget.classList.toggle('activated');
      }
    }
  }

  removeActivatedCSS() {
    const activatedTag = document.getElementById("mobile-style-wrapper")!.getElementsByClassName("activated");
    for (let i = 0; i < activatedTag.length; i++) {
      if (activatedTag[i].classList.contains("activated")) {
        activatedTag[i].classList.remove("activated");
      }
    }
  }

  getCurrentSearchCategoryTag() {
    return this.listPageMainService.currentSearchCategoryTag;
  }

  isCategoryTagSelected(categoryTagId: number, level2CategoryId: number) {
    return this.getCurrentSearchCategoryTag().some(tag => tag.id === categoryTagId && tag.level2CategoryId === level2CategoryId);
  }

  isContainsOther(level3ItemName: string) {
    return level3ItemName.includes("other");
  }

  translateWord(word: string): string {
    const translation = this.dictionary[word];
    if (translation) {
      return translation;
    } else {
      return "";
    }
  }
}
