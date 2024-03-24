import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ListPageMainService } from '../../../services/list-page-main.service';
import { CategoryTagListPage } from '../../../models/category-tag-list-page';

@Component({
  selector: 'app-subject-category',
  templateUrl: './subject-category.component.html',
  styleUrls: ['./subject-category.component.css']
})
export class SubjectCategoryComponent implements OnInit, AfterViewInit {
  @Output() notifyToastCall = new EventEmitter();
  categorySubjectListRaw: any[] = [];
  categorySubjectList: any[] = [];
  isViewLoaded: boolean = true;

  constructor(
    private listPageMainService: ListPageMainService
  ) {
  }

  ngOnInit() {
    this.categorySubjectListRaw = [{
      'id': 1,
      'name': 'subject_1_1',
      'level2CategoryId': 1,
      'level2CategoryName': 'subject_1',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 2,
      'name': 'subject_1_2',
      'level2CategoryId': 1,
      'level2CategoryName': 'subject_1',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 3,
      'name': 'subject_1_3',
      'level2CategoryId': 1,
      'level2CategoryName': 'subject_1',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 4,
      'name': 'subject_1_4',
      'level2CategoryId': 1,
      'level2CategoryName': 'subject_1',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 5,
      'name': 'subject_1_5',
      'level2CategoryId': 1,
      'level2CategoryName': 'subject_1',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 6,
      'name': 'subject_1_6',
      'level2CategoryId': 1,
      'level2CategoryName': 'subject_1',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 7,
      'name': 'subject_1_7',
      'level2CategoryId': 1,
      'level2CategoryName': 'subject_1',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 8,
      'name': 'subject_1_8',
      'level2CategoryId': 1,
      'level2CategoryName': 'subject_1',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 9,
      'name': 'subject_1_9',
      'level2CategoryId': 1,
      'level2CategoryName': 'subject_1',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 10,
      'name': 'subject_1_other',
      'level2CategoryId': 1,
      'level2CategoryName': 'subject_1',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 11,
      'name': 'subject_2_1',
      'level2CategoryId': 2,
      'level2CategoryName': 'subject_2',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 12,
      'name': 'subject_2_2',
      'level2CategoryId': 2,
      'level2CategoryName': 'subject_2',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 13,
      'name': 'subject_2_3',
      'level2CategoryId': 2,
      'level2CategoryName': 'subject_2',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 14,
      'name': 'subject_2_4',
      'level2CategoryId': 2,
      'level2CategoryName': 'subject_2',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 15,
      'name': 'subject_2_5',
      'level2CategoryId': 2,
      'level2CategoryName': 'subject_2',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 16,
      'name': 'subject_2_6',
      'level2CategoryId': 2,
      'level2CategoryName': 'subject_2',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 17,
      'name': 'subject_2_7',
      'level2CategoryId': 2,
      'level2CategoryName': 'subject_2',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 18,
      'name': 'subject_2_8',
      'level2CategoryId': 2,
      'level2CategoryName': 'subject_2',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 19,
      'name': 'subject_2_9',
      'level2CategoryId': 2,
      'level2CategoryName': 'subject_2',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 20,
      'name': 'subject_2_other',
      'level2CategoryId': 2,
      'level2CategoryName': 'subject_2',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 21,
      'name': 'subject_3_1',
      'level2CategoryId': 3,
      'level2CategoryName': 'subject_3',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 22,
      'name': 'subject_3_2',
      'level2CategoryId': 3,
      'level2CategoryName': 'subject_3',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 23,
      'name': 'subject_3_3',
      'level2CategoryId': 3,
      'level2CategoryName': 'subject_3',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 24,
      'name': 'subject_3_4',
      'level2CategoryId': 3,
      'level2CategoryName': 'subject_3',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 25,
      'name': 'subject_3_5',
      'level2CategoryId': 3,
      'level2CategoryName': 'subject_3',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 26,
      'name': 'subject_3_6',
      'level2CategoryId': 3,
      'level2CategoryName': 'subject_3',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 27,
      'name': 'subject_3_7',
      'level2CategoryId': 3,
      'level2CategoryName': 'subject_3',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 28,
      'name': 'subject_3_8',
      'level2CategoryId': 3,
      'level2CategoryName': 'subject_3',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 29,
      'name': 'subject_3_9',
      'level2CategoryId': 3,
      'level2CategoryName': 'subject_3',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 30,
      'name': 'subject_3_other',
      'level2CategoryId': 3,
      'level2CategoryName': 'subject_3',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 31,
      'name': 'subject_4_1',
      'level2CategoryId': 4,
      'level2CategoryName': 'subject_4',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 32,
      'name': 'subject_4_2',
      'level2CategoryId': 4,
      'level2CategoryName': 'subject_4',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 33,
      'name': 'subject_4_3',
      'level2CategoryId': 4,
      'level2CategoryName': 'subject_4',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 34,
      'name': 'subject_4_4',
      'level2CategoryId': 4,
      'level2CategoryName': 'subject_4',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 35,
      'name': 'subject_4_5',
      'level2CategoryId': 4,
      'level2CategoryName': 'subject_4',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 36,
      'name': 'subject_4_6',
      'level2CategoryId': 4,
      'level2CategoryName': 'subject_4',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 37,
      'name': 'subject_4_7',
      'level2CategoryId': 4,
      'level2CategoryName': 'subject_4',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 38,
      'name': 'subject_4_8',
      'level2CategoryId': 4,
      'level2CategoryName': 'subject_4',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 39,
      'name': 'subject_4_9',
      'level2CategoryId': 4,
      'level2CategoryName': 'subject_4',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 40,
      'name': 'subject_4_other',
      'level2CategoryId': 4,
      'level2CategoryName': 'subject_4',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 41,
      'name': 'subject_5_1',
      'level2CategoryId': 5,
      'level2CategoryName': 'subject_5',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 42,
      'name': 'subject_5_2',
      'level2CategoryId': 5,
      'level2CategoryName': 'subject_5',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 43,
      'name': 'subject_5_3',
      'level2CategoryId': 5,
      'level2CategoryName': 'subject_5',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 44,
      'name': 'subject_5_4',
      'level2CategoryId': 5,
      'level2CategoryName': 'subject_5',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 45,
      'name': 'subject_5_5',
      'level2CategoryId': 5,
      'level2CategoryName': 'subject_5',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 46,
      'name': 'subject_5_6',
      'level2CategoryId': 5,
      'level2CategoryName': 'subject_5',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 47,
      'name': 'subject_5_7',
      'level2CategoryId': 5,
      'level2CategoryName': 'subject_5',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 48,
      'name': 'subject_5_8',
      'level2CategoryId': 5,
      'level2CategoryName': 'subject_5',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 49,
      'name': 'subject_5_9',
      'level2CategoryId': 5,
      'level2CategoryName': 'subject_5',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 50,
      'name': 'subject_5_other',
      'level2CategoryId': 5,
      'level2CategoryName': 'subject_5',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 51,
      'name': 'subject_6_1',
      'level2CategoryId': 6,
      'level2CategoryName': 'subject_6',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 52,
      'name': 'subject_6_2',
      'level2CategoryId': 6,
      'level2CategoryName': 'subject_6',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 53,
      'name': 'subject_6_3',
      'level2CategoryId': 6,
      'level2CategoryName': 'subject_6',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 54,
      'name': 'subject_6_4',
      'level2CategoryId': 6,
      'level2CategoryName': 'subject_6',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 55,
      'name': 'subject_6_5',
      'level2CategoryId': 6,
      'level2CategoryName': 'subject_6',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 56,
      'name': 'subject_6_6',
      'level2CategoryId': 6,
      'level2CategoryName': 'subject_6',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 57,
      'name': 'subject_6_7',
      'level2CategoryId': 6,
      'level2CategoryName': 'subject_6',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 58,
      'name': 'subject_6_8',
      'level2CategoryId': 6,
      'level2CategoryName': 'subject_6',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 59,
      'name': 'subject_6_9',
      'level2CategoryId': 6,
      'level2CategoryName': 'subject_6',
      'categoryDesc': '',
      'level1CategoryId': 1
    },
    {
      'id': 60,
      'name': 'subject_6_other',
      'level2CategoryId': 6,
      'level2CategoryName': 'subject_6',
      'categoryDesc': '',
      'level1CategoryId': 1
    }];

    this.categorySubjectList = this.listPageMainService.transformCategoryListWithLevels(this.categorySubjectListRaw);
  }

  ngAfterViewInit(): void {
    const accordions = document.getElementsByClassName("wrapper__accordion") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < accordions.length; i++) {
      accordions[i].addEventListener("click", function () {
        const accordion = accordions[i] as HTMLElement;
        accordion.classList.toggle("toggle");
        const accordionsPanel = accordion.nextElementSibling as HTMLElement;

        if (accordionsPanel) {
          accordionsPanel.classList.toggle("toggle");
          if (accordionsPanel.style.maxHeight) {
            accordionsPanel.style.maxHeight = "";
          } else {
            accordionsPanel.style.maxHeight = accordionsPanel.scrollHeight + "px";
          }
        }
      });
    }

    setTimeout(() => {
      for (let i = 0; i < this.categorySubjectList.length; i++) {
        const level3List = this.categorySubjectList[i].level3List;
        for (let j = 0; j < level3List.length; j++) {
          if (this.isCategoryTagSelected(level3List[j].id, this.categorySubjectList[i].level2CategoryId)) {
            document.getElementById("level2" + this.categorySubjectList[i].level2CategoryId)?.click();
            break;
          }
        }
      }

      const allTags = document.getElementsByClassName("all");
      for (let i = 0; i < allTags.length; i++) {
        if (allTags[i].classList.contains("activated")) {
          const displayTag = allTags[i].parentElement?.parentElement?.previousElementSibling as HTMLElement;
          if (!displayTag?.classList.contains("toggle")) {
            displayTag.click();
          }
        }
      }
    }, 210);
  }

  toggleToFilter($event: any, category: CategoryTagListPage) {
    const currentTags = this.getCurrentSearchCategoryTag();
    const index = currentTags.findIndex(tag => tag.id === category.id && tag.level2CategoryId == category.level2CategoryId);
    if (index !== -1) {
      currentTags.splice(index, 1);
      this.listPageMainService.searchPainting();
    } else {

      if (category.id == 0 || category.name.includes("Khác")) {
        this.listPageMainService.clearCurrentSearchCategoryTag(category.level2CategoryId + "", null);
      }

      if (category.level2CategoryId != this.listPageMainService.categorySubjectLevel2Current && 
          category.level1CategoryId == this.listPageMainService.categorySubjectLevel1Current) {
        this.listPageMainService.clearCurrentSearchCategoryTag("clearLevel1", category.level1CategoryId);
      }

      const addSuccessFully = this.listPageMainService.updateCurrentSearchCategoryTag(category);
      if (!addSuccessFully) {
        this.notifyToastCall.emit({ type: "warning", title: "Giới hạn tìm kiếm", desc: "Chỉ có thể tìm kiếm tối đa theo 5 thẻ" });
      } else {
        this.listPageMainService.searchPainting();
        this.listPageMainService.categorySubjectLevel2Current = category.level2CategoryId;
        this.listPageMainService.categorySubjectLevel1Current = category.level1CategoryId;
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

  isContainsOther(level3ItemName: string) {
    return level3ItemName.includes("other");
  }
}
