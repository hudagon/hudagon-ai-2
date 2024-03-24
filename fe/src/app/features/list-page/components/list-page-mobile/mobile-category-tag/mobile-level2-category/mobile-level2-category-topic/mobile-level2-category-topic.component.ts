import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryTagListPage } from 'src/app/features/list-page/models/category-tag-list-page';
import { ListPageMainService } from 'src/app/features/list-page/services/list-page-main.service';
import { ToastService } from 'src/app/shareds/main-shared/services/toast.service';

@Component({
  selector: 'app-mobile-level2-category-topic',
  templateUrl: './mobile-level2-category-topic.component.html',
  styleUrls: ['./mobile-level2-category-topic.component.css']
})
export class MobileLevel2CategoryTopicComponent implements OnInit {
  @Output() notifyToastCall = new EventEmitter();
  @Input() level1CategoryId: any;
  level3CategoryTopicListRaw: any[] = [];
  level3CategoryTopicList: any[] = [];

  constructor(
    private listPageMainService: ListPageMainService,
    private toastService: ToastService
  ) {
  }

  ngOnInit(): void {
    this.level3CategoryTopicListRaw = [
      {
        'id': 91,
        'name': 'topic_1',
        'level2CategoryId': 10,
        'level2CategoryName': 'topic',
        'categoryDesc': ''
      },
      {
        'id': 92,
        'name': 'topic_2',
        'level2CategoryId': 10,
        'level2CategoryName': 'topic',
        'categoryDesc': ''
      },
      {
        'id': 93,
        'name': 'topic_3',
        'level2CategoryId': 10,
        'level2CategoryName': 'topic',
        'categoryDesc': ''
      },
      {
        'id': 94,
        'name': 'topic_4',
        'level2CategoryId': 10,
        'level2CategoryName': 'topic',
        'categoryDesc': ''
      },
      {
        'id': 95,
        'name': 'topic_5',
        'level2CategoryId': 10,
        'level2CategoryName': 'topic',
        'categoryDesc': ''
      },
      {
        'id': 96,
        'name': 'topic_6',
        'level2CategoryId': 10,
        'level2CategoryName': 'topic',
        'categoryDesc': ''
      },
      {
        'id': 97,
        'name': 'topic_7',
        'level2CategoryId': 10,
        'level2CategoryName': 'topic',
        'categoryDesc': ''
      },
      {
        'id': 98,
        'name': 'topic_8',
        'level2CategoryId': 10,
        'level2CategoryName': 'topic',
        'categoryDesc': ''
      },
      {
        'id': 99,
        'name': 'topic_9',
        'level2CategoryId': 10,
        'level2CategoryName': 'topic',
        'categoryDesc': ''
      },
      {
        'id': 100,
        'name': 'topic_other',
        'level2CategoryId': 10,
        'level2CategoryName': 'topic',
        'categoryDesc': ''
      }
    ];

    this.level3CategoryTopicList = this.listPageMainService.transformCategoryListWithLevels(this.level3CategoryTopicListRaw);
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
    const activatedTag = document.getElementById("mobile-topic-wrapper")!.getElementsByClassName("activated");
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
