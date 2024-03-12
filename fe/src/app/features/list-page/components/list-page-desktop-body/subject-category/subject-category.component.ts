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
  categoryListPageSubjectLevel3: any[] = [];
  categoryListPageSubjectLevel2: any[] = [];

  categorySubjectList: any[] = [];


  isViewLoaded: boolean = true;

  constructor(
    private listPageMainService: ListPageMainService
  ) {
  }

  ngOnInit() {
    this.categorySubjectList = [
      {
        level2Id: 1,
        level2Name: "Con người",
        level3List: [
          { id: 1, name: 'Khác' },
          { id: 2, name: 'Cá nhân' },
          { id: 3, name: 'Cặp đôi' },
          { id: 4, name: 'Châu Phi' },
          { id: 5, name: 'Châu Âu' },
          { id: 6, name: 'Châu Á' },
          { id: 7, name: 'Tuổi đôi mươi' },
          { id: 8, name: 'Trưởng thành' }
        ]
      },
      {
        level2Id: 2,
        level2Name: "Động vật",
        level3List: [
          { id: 9, name: 'Khác' },
          { id: 10, name: 'Trên cạn' },
          { id: 11, name: 'Dưới nước' },
          { id: 12, name: 'Trên không' },
          { id: 13, name: 'Thần thoại' },
        ]
      },
      {
        level2Id: 3,
        level2Name: "Phong cảnh",
        level3List: [
          { id: 14, name: 'Khác' },
          { id: 15, name: 'Phong cảnh 1' },
          { id: 16, name: 'Phong cảnh 2' },
          { id: 17, name: 'Phong cảnh 3' },
          { id: 18, name: 'Phong cảnh 4' },
        ]
      }
    ];
  }

  ngAfterViewInit(): void {
    const accordions = document.getElementsByClassName("wrapper__accordion") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < accordions.length; i++) {
      accordions[i].addEventListener("click", function () {
        const accordion = accordions[i] as HTMLElement;
        accordion.classList.toggle("toggle");
        const accordionsPanel = accordion.nextElementSibling as HTMLElement;

        const allElement = accordionsPanel.getElementsByClassName("all");
        if (allElement.length != 0) {
          allElement[0].classList.toggle("activated");
        }

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
          if (this.isCategoryTagSelected({ id: level3List[j].id, name: level3List[j].name })) {
            document.getElementById("level2" + this.categorySubjectList[i].level2Id)?.click();
            break;
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

  isCategoryTagSelected(categoryTag: CategoryTagListPage) {
    return this.getCurrentSearchCategoryTag().some(tag => tag.id === categoryTag.id);
  }
}
