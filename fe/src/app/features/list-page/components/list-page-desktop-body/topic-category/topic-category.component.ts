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
  categoryTopicList: any[] = [];

  constructor(
    private listPageMainService: ListPageMainService,
  ) {
  }

  ngOnInit(): void {
    this.categoryTopicList = [
      {
        id: 2,
        name: "Phong thủy"
      },
      {
        id: 3,
        name: "Tôn giáo"
      },
      {
        id: 4,
        name: "Chiến tranh"
      },
      {
        id: 5,
        name: "Thể thao"
      },
      {
        id: 6,
        name: "Cổ trang"
      },
      {
        id: 7,
        name: "Thần thoại"
      }
    ];
  }

  toggleToFilter($event: any, category: CategoryTagListPage) {
    const currentTags = this.getCurrentSearchCategoryTag();
    const index = currentTags.findIndex(tag => tag.id === category.id && tag.level2Id == -3);
    if (index !== -1) {
      currentTags.splice(index, 1);
      $event.currentTarget.classList.toggle('activated');
    } else {

      this.listPageMainService.clearCurrentSearchCategoryTag(category.level2Id + "");
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

  isCategoryTagSelected(categoryTagId: number, level2Id: number) {
    return this.getCurrentSearchCategoryTag().some(tag => tag.id === categoryTagId && tag.level2Id === level2Id);
  }

  removeActivatedCSS() {
    const activatedTag = document.getElementById("topic-wrapper")!.getElementsByClassName("activated"); 
    for (let i = 0; i < activatedTag.length; i++) {
      if (activatedTag[i].classList.contains("activated")) {
        activatedTag[i].classList.remove("activated");
      }
    }
  }
}