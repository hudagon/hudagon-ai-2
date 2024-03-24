import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryTagListPage } from '../../../models/category-tag-list-page';
import { ListPageMainService } from '../../../services/list-page-main.service';

@Component({
  selector: 'app-ratio-category',
  templateUrl: './ratio-category.component.html',
  styleUrls: ['./ratio-category.component.css']
})
export class RatioCategoryComponent implements OnInit {
  @Output() notifyToastCall = new EventEmitter();
  categoryRatioListRaw: any[] = [];
  categoryRatioList: any[] = [];

  constructor(
    private listPageMainService: ListPageMainService
  ) { }

  ngOnInit(): void {
    this.categoryRatioListRaw = [{
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

    this.categoryRatioList = this.listPageMainService.transformCategoryListWithLevels(this.categoryRatioListRaw);
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
        this.notifyToastCall.emit({ type: "warning", title: "Giới hạn tìm kiếm", desc: "Chỉ có thể tìm kiếm tối đa theo 5 thẻ" });
      } else {
        this.listPageMainService.searchPainting();
        $event.currentTarget.classList.toggle('activated');
      }
    }
  }

  getCurrentSearchCategoryTag() {
    return this.listPageMainService.currentSearchCategoryTag;
  }

  removeActivatedCSS() {
    const activatedTag = document.getElementById("ratio-wrapper")!.getElementsByClassName("activated");
    for (let i = 0; i < activatedTag.length; i++) {
      if (activatedTag[i].classList.contains("activated")) {
        activatedTag[i].classList.remove("activated");
      }
    }
  }

  isCategoryTagSelected(categoryTagId: number, level2CategoryId: number) {
    return this.getCurrentSearchCategoryTag().some(tag => tag.id === categoryTagId && tag.level2CategoryId === level2CategoryId);
  }
}
