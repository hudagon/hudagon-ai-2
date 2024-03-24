import { Component, Input } from '@angular/core';
import { CategoryTagListPage } from 'src/app/features/list-page/models/category-tag-list-page';
import { ListPageMainService } from 'src/app/features/list-page/services/list-page-main.service';
import { ToastService } from 'src/app/shareds/main-shared/services/toast.service';

@Component({
  selector: 'app-mobile-level2-category-ratio',
  templateUrl: './mobile-level2-category-ratio.component.html',
  styleUrls: ['./mobile-level2-category-ratio.component.css']
})
export class MobileLevel2CategoryRatioComponent {
  level3CategoryRatioListRaw: any[] = [];
  level3CategoryRatioList: any[] = [];

  constructor(
    private listPageMainService: ListPageMainService,
    private toastService: ToastService
  ) {
  }

  ngOnInit(): void {
    this.level3CategoryRatioListRaw = [{
      'id': 101,
      'name': '1:1',
      'categoryDesc': 'portrait',
      'level2CategoryId': 11,
      'level2CategoryName': 'ratio',
      'level1CategoryId': 4
    },
    {
      'id': 102,
      'name': '3:4',
      'categoryDesc': 'landscape',
      'level2CategoryId': 11,
      'level2CategoryName': 'ratio',
      'level1CategoryId': 4
    },
    {
      'id': 103,
      'name': '4:3',
      'categoryDesc': 'portrait',
      'level2CategoryId': 11,
      'level2CategoryName': 'ratio',
      'level1CategoryId': 4
    },
    {
      'id': 104,
      'name': '16:9',
      'categoryDesc': 'landscape',
      'level2CategoryId': 11,
      'level2CategoryName': 'ratio',
      'level1CategoryId': 4
    },
    {
      'id': 105,
      'name': '9:16',
      'categoryDesc': 'portrait',
      'level2CategoryId': 11,
      'level2CategoryName': 'ratio',
      'level1CategoryId': 4
    }
    ];

    this.level3CategoryRatioList = this.listPageMainService.transformCategoryListWithLevels(this.level3CategoryRatioListRaw);
  }

  removeColon(inputString: string): string {
    return inputString.replace(':', '');
  }

  toggleToFilter($event: any, category: CategoryTagListPage) {
    const currentTags = this.getCurrentSearchCategoryTag();
    const index = currentTags.findIndex(tag => tag.id === category.id && tag.level2CategoryId == category.level2CategoryId);
    if (index !== -1) {
      currentTags.splice(index, 1);
      $event.currentTarget.classList.toggle('activated');
      this.listPageMainService.searchPainting();
    } else {

      this.listPageMainService.clearCurrentSearchCategoryTag(category.level2CategoryId + "", null);
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
    const activatedTag = document.getElementById("mobile-ratio-wrapper")!.getElementsByClassName("activated");
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
}
