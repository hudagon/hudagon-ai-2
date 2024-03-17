import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryTagListPage } from '../../../models/category-tag-list-page';
import { ListPageMainService } from '../../../services/list-page-main.service';

@Component({
  selector: 'app-topic-category',
  templateUrl: './topic-category.component.html',
  styleUrls: ['./topic-category.component.css']
})
export class TopicCategoryComponent implements OnInit {
  @Output() notifyToastCall = new EventEmitter();
  isViewLoaded: boolean = true;
  categoryTopicListRaw: any[] = [];
  categoryTopicList: any[] = [];

  constructor(
    private listPageMainService: ListPageMainService  
  ) {
  }

  ngOnInit(): void {
    this.categoryTopicListRaw = [
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

    this.categoryTopicList = this.listPageMainService.transformCategoryListWithLevels(this.categoryTopicListRaw);
  }

  toggleToFilter($event: any, category: CategoryTagListPage) {
    const currentTags = this.getCurrentSearchCategoryTag();
    const index = currentTags.findIndex(tag => tag.id === category.id && tag.level2CategoryId == category.level2CategoryId);
    if (index !== -1) {
      currentTags.splice(index, 1);
      $event.currentTarget.classList.toggle('activated');
    } else {

      this.listPageMainService.clearCurrentSearchCategoryTag(category.level2CategoryId + "", null);
      this.removeActivatedCSS();

      const addSuccessFully = this.listPageMainService.updateCurrentSearchCategoryTag(category);
      if (!addSuccessFully) {
        this.notifyToastCall.emit({ type: "warning", title: "Giới hạn tìm kiếm", desc: "Chỉ có thể tìm kiếm tối đa theo 5 thẻ" });
      } else {
        $event.currentTarget.classList.toggle('activated');
      }
    }
  }

  getCurrentSearchCategoryTag() {
    return this.listPageMainService.currentSearchCategoryTag;
  }

  isCategoryTagSelected(categoryTagId: number, level2CategoryId: number) {
    return this.getCurrentSearchCategoryTag().some(tag => tag.id === categoryTagId && tag.level2CategoryId === level2CategoryId);
  }

  removeActivatedCSS() {
    const activatedTag = document.getElementById("topic-wrapper")!.getElementsByClassName("activated");
    for (let i = 0; i < activatedTag.length; i++) {
      if (activatedTag[i].classList.contains("activated")) {
        activatedTag[i].classList.remove("activated");
      }
    }
  }

  isContainsOther(level3ItemName: string) {
    return level3ItemName.includes("other");
  }
}