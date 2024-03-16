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
  categorySubjectList: any [] = [];
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
      'categoryDesc': ''
    },
    {
      'id': 2,
      'name': 'subject_1_2',
      'level2CategoryId': 1,
      'level2CategoryName': 'subject_1',
      'categoryDesc': ''
    },
    {
      'id': 3,
      'name': 'subject_1_3',
      'level2CategoryId': 1,
      'level2CategoryName': 'subject_1',
      'categoryDesc': ''
    },
    {
      'id': 4,
      'name': 'subject_1_4',
      'level2CategoryId': 1,
      'level2CategoryName': 'subject_1',
      'categoryDesc': ''
    },
    {
      'id': 5,
      'name': 'subject_1_5',
      'level2CategoryId': 1,
      'level2CategoryName': 'subject_1',
      'categoryDesc': ''
    },
    {
      'id': 6,
      'name': 'subject_1_6',
      'level2CategoryId': 1,
      'level2CategoryName': 'subject_1',
      'categoryDesc': ''
    },
    {
      'id': 7,
      'name': 'subject_1_7',
      'level2CategoryId': 1,
      'level2CategoryName': 'subject_1',
      'categoryDesc': ''
    },
    {
      'id': 8,
      'name': 'subject_1_8',
      'level2CategoryId': 1,
      'level2CategoryName': 'subject_1',
      'categoryDesc': ''
    },
    {
      'id': 9,
      'name': 'subject_1_9',
      'level2CategoryId': 1,
      'level2CategoryName': 'subject_1',
      'categoryDesc': ''
    },
    {
      'id': 10,
      'name': 'subject_1_other',
      'level2CategoryId': 1,
      'level2CategoryName': 'subject_1',
      'categoryDesc': ''
    },
    {
      'id': 11,
      'name': 'subject_2_1',
      'level2CategoryId': 2,
      'level2CategoryName': 'subject_2',
      'categoryDesc': ''
    },
    {
      'id': 12,
      'name': 'subject_2_2',
      'level2CategoryId': 2,
      'level2CategoryName': 'subject_2',
      'categoryDesc': ''
    },
    {
      'id': 13,
      'name': 'subject_2_3',
      'level2CategoryId': 2,
      'level2CategoryName': 'subject_2',
      'categoryDesc': ''
    },
    {
      'id': 14,
      'name': 'subject_2_4',
      'level2CategoryId': 2,
      'level2CategoryName': 'subject_2',
      'categoryDesc': ''
    },
    {
      'id': 15,
      'name': 'subject_2_5',
      'level2CategoryId': 2,
      'level2CategoryName': 'subject_2',
      'categoryDesc': ''
    },
    {
      'id': 16,
      'name': 'subject_2_6',
      'level2CategoryId': 2,
      'level2CategoryName': 'subject_2',
      'categoryDesc': ''
    },
    {
      'id': 17,
      'name': 'subject_2_7',
      'level2CategoryId': 2,
      'level2CategoryName': 'subject_2',
      'categoryDesc': ''
    },
    {
      'id': 18,
      'name': 'subject_2_8',
      'level2CategoryId': 2,
      'level2CategoryName': 'subject_2',
      'categoryDesc': ''
    },
    {
      'id': 19,
      'name': 'subject_2_9',
      'level2CategoryId': 2,
      'level2CategoryName': 'subject_2',
      'categoryDesc': ''
    },
    {
      'id': 20,
      'name': 'subject_2_other',
      'level2CategoryId': 2,
      'level2CategoryName': 'subject_2',
      'categoryDesc': ''
    },
    {
      'id': 21,
      'name': 'subject_3_1',
      'level2CategoryId': 3,
      'level2CategoryName': 'subject_3',
      'categoryDesc': ''
    },
    {
      'id': 22,
      'name': 'subject_3_2',
      'level2CategoryId': 3,
      'level2CategoryName': 'subject_3',
      'categoryDesc': ''
    },
    {
      'id': 23,
      'name': 'subject_3_3',
      'level2CategoryId': 3,
      'level2CategoryName': 'subject_3',
      'categoryDesc': ''
    },
    {
      'id': 24,
      'name': 'subject_3_4',
      'level2CategoryId': 3,
      'level2CategoryName': 'subject_3',
      'categoryDesc': ''
    },
    {
      'id': 25,
      'name': 'subject_3_5',
      'level2CategoryId': 3,
      'level2CategoryName': 'subject_3',
      'categoryDesc': ''
    },
    {
      'id': 26,
      'name': 'subject_3_6',
      'level2CategoryId': 3,
      'level2CategoryName': 'subject_3',
      'categoryDesc': ''
    },
    {
      'id': 27,
      'name': 'subject_3_7',
      'level2CategoryId': 3,
      'level2CategoryName': 'subject_3',
      'categoryDesc': ''
    },
    {
      'id': 28,
      'name': 'subject_3_8',
      'level2CategoryId': 3,
      'level2CategoryName': 'subject_3',
      'categoryDesc': ''
    },
    {
      'id': 29,
      'name': 'subject_3_9',
      'level2CategoryId': 3,
      'level2CategoryName': 'subject_3',
      'categoryDesc': ''
    },
    {
      'id': 30,
      'name': 'subject_3_other',
      'level2CategoryId': 3,
      'level2CategoryName': 'subject_3',
      'categoryDesc': ''
    },
    {
      'id': 31,
      'name': 'subject_4_1',
      'level2CategoryId': 4,
      'level2CategoryName': 'subject_4',
      'categoryDesc': ''
    },
    {
      'id': 32,
      'name': 'subject_4_2',
      'level2CategoryId': 4,
      'level2CategoryName': 'subject_4',
      'categoryDesc': ''
    },
    {
      'id': 33,
      'name': 'subject_4_3',
      'level2CategoryId': 4,
      'level2CategoryName': 'subject_4',
      'categoryDesc': ''
    },
    {
      'id': 34,
      'name': 'subject_4_4',
      'level2CategoryId': 4,
      'level2CategoryName': 'subject_4',
      'categoryDesc': ''
    },
    {
      'id': 35,
      'name': 'subject_4_5',
      'level2CategoryId': 4,
      'level2CategoryName': 'subject_4',
      'categoryDesc': ''
    },
    {
      'id': 36,
      'name': 'subject_4_6',
      'level2CategoryId': 4,
      'level2CategoryName': 'subject_4',
      'categoryDesc': ''
    },
    {
      'id': 37,
      'name': 'subject_4_7',
      'level2CategoryId': 4,
      'level2CategoryName': 'subject_4',
      'categoryDesc': ''
    },
    {
      'id': 38,
      'name': 'subject_4_8',
      'level2CategoryId': 4,
      'level2CategoryName': 'subject_4',
      'categoryDesc': ''
    },
    {
      'id': 39,
      'name': 'subject_4_9',
      'level2CategoryId': 4,
      'level2CategoryName': 'subject_4',
      'categoryDesc': ''
    },
    {
      'id': 40,
      'name': 'subject_4_other',
      'level2CategoryId': 4,
      'level2CategoryName': 'subject_4',
      'categoryDesc': ''
    },
    {
      'id': 41,
      'name': 'subject_5_1',
      'level2CategoryId': 5,
      'level2CategoryName': 'subject_5',
      'categoryDesc': ''
    },
    {
      'id': 42,
      'name': 'subject_5_2',
      'level2CategoryId': 5,
      'level2CategoryName': 'subject_5',
      'categoryDesc': ''
    },
    {
      'id': 43,
      'name': 'subject_5_3',
      'level2CategoryId': 5,
      'level2CategoryName': 'subject_5',
      'categoryDesc': ''
    },
    {
      'id': 44,
      'name': 'subject_5_4',
      'level2CategoryId': 5,
      'level2CategoryName': 'subject_5',
      'categoryDesc': ''
    },
    {
      'id': 45,
      'name': 'subject_5_5',
      'level2CategoryId': 5,
      'level2CategoryName': 'subject_5',
      'categoryDesc': ''
    },
    {
      'id': 46,
      'name': 'subject_5_6',
      'level2CategoryId': 5,
      'level2CategoryName': 'subject_5',
      'categoryDesc': ''
    },
    {
      'id': 47,
      'name': 'subject_5_7',
      'level2CategoryId': 5,
      'level2CategoryName': 'subject_5',
      'categoryDesc': ''
    },
    {
      'id': 48,
      'name': 'subject_5_8',
      'level2CategoryId': 5,
      'level2CategoryName': 'subject_5',
      'categoryDesc': ''
    },
    {
      'id': 49,
      'name': 'subject_5_9',
      'level2CategoryId': 5,
      'level2CategoryName': 'subject_5',
      'categoryDesc': ''
    },
    {
      'id': 50,
      'name': 'subject_5_other',
      'level2CategoryId': 5,
      'level2CategoryName': 'subject_5',
      'categoryDesc': ''
    },
    {
      'id': 51,
      'name': 'subject_6_1',
      'level2CategoryId': 6,
      'level2CategoryName': 'subject_6',
      'categoryDesc': ''
    },
    {
      'id': 52,
      'name': 'subject_6_2',
      'level2CategoryId': 6,
      'level2CategoryName': 'subject_6',
      'categoryDesc': ''
    },
    {
      'id': 53,
      'name': 'subject_6_3',
      'level2CategoryId': 6,
      'level2CategoryName': 'subject_6',
      'categoryDesc': ''
    },
    {
      'id': 54,
      'name': 'subject_6_4',
      'level2CategoryId': 6,
      'level2CategoryName': 'subject_6',
      'categoryDesc': ''
    },
    {
      'id': 55,
      'name': 'subject_6_5',
      'level2CategoryId': 6,
      'level2CategoryName': 'subject_6',
      'categoryDesc': ''
    },
    {
      'id': 56,
      'name': 'subject_6_6',
      'level2CategoryId': 6,
      'level2CategoryName': 'subject_6',
      'categoryDesc': ''
    },
    {
      'id': 57,
      'name': 'subject_6_7',
      'level2CategoryId': 6,
      'level2CategoryName': 'subject_6',
      'categoryDesc': ''
    },
    {
      'id': 58,
      'name': 'subject_6_8',
      'level2CategoryId': 6,
      'level2CategoryName': 'subject_6',
      'categoryDesc': ''
    },
    {
      'id': 59,
      'name': 'subject_6_9',
      'level2CategoryId': 6,
      'level2CategoryName': 'subject_6',
      'categoryDesc': ''
    },
    {
      'id': 60,
      'name': 'subject_6_other',
      'level2CategoryId': 6,
      'level2CategoryName': 'subject_6',
      'categoryDesc': ''
    }];

    this.categorySubjectList = this.transformCategoryListWithLoop(this.categorySubjectListRaw);

    console.log(this.categorySubjectList);
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
          if (this.isCategoryTagSelected(level3List[j].id, this.categorySubjectList[i].level2Id)) {
            document.getElementById("level2" + this.categorySubjectList[i].level2Id)?.click();
            break;
          } else {
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
    const index = currentTags.findIndex(tag => tag.id === category.id);
    if (index !== -1) {
      currentTags.splice(index, 1);
    } else {

      if (category.id == 0 || category.name.includes("other")) {
        this.listPageMainService.clearCurrentSearchCategoryTag(category.level2CategoryId + "");
      }

      if (category.level2CategoryId != this.listPageMainService.categorySubjectLevel2Current) {
        this.listPageMainService.clearCurrentSearchCategoryTag("except_search");
      }

      const addSuccessFully = this.listPageMainService.updateCurrentSearchCategoryTag(category);
      if (!addSuccessFully) {
        this.notifyToastCall.emit({ type: "warning", title: "Giới hạn tìm kiếm", desc: "Chỉ có thể tìm kiếm tối đa theo 5 thẻ" });
      } else {
        this.listPageMainService.categorySubjectLevel2Current = category.level2CategoryId;
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

  transformCategoryListWithLoop(categorySubjectListRaw: any[]) {
    const result = [];
    
    for (let i = 0; i < categorySubjectListRaw.length; i++) {
      const curr = categorySubjectListRaw[i];
      const level3Item = { id: curr.id, name: curr.name, categoryDesc: curr.categoryDesc };
      const index = result.findIndex(item => item.level2CategoryId === curr.level2CategoryId);
  
      if (index === -1) {
        result.push({
          level2CategoryId: curr.level2CategoryId,
          level2CategoryName: curr.level2CategoryName,
          level3List: [level3Item]
        });
      } else {
        result[index].level3List.push(level3Item);
      }
    }
  
    return result;
  }

  isContainsOther(level3ItemName: string) {
    return level3ItemName.includes("other");
  }
}
