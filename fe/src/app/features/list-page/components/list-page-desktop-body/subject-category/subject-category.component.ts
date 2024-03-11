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

  isViewLoaded: boolean = true;

  constructor(
    private listPageMainService: ListPageMainService
  ) {
  }

  ngOnInit() {
    this.categoryListPageSubjectLevel2 = [
      { id: 1, name: 'Con người' }
    ];
    this.categoryListPageSubjectLevel3 = [
      { id: 1, name: 'Khác' , level2_id: 1 },
      { id: 2, name: 'Cá nhân', level2_id: 1 },
      { id: 3, name: 'Cặp đôi', level2_id: 1 },
      { id: 4, name: 'Châu Phi', level2_id: 1 },
      { id: 5, name: 'Châu Âu', level2_id: 1 },
      { id: 6, name: 'Châu Á', level2_id: 1 },
      { id: 7, name: 'Tuổi đôi mươi', level2_id: 1 },
      { id: 8, name: 'Trưởng thành', level2_id: 1 }
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

    let flagCheck = false;
    for (let i = 0; i < this.categoryListPageSubjectLevel3.length; i++) {
      const categoryListPageSubjectLevel3Item = this.categoryListPageSubjectLevel3[i];
      if (this.isCategoryTagSelected({ id: categoryListPageSubjectLevel3Item.id, name: categoryListPageSubjectLevel3Item.name }) && !flagCheck) {
        for (let j = 0; j < this.categoryListPageSubjectLevel2.length; j++) {
          if (this.categoryListPageSubjectLevel2[j].id == categoryListPageSubjectLevel3Item.level2_id) {
            console.log("vô", document.getElementById("level2" + categoryListPageSubjectLevel3Item.level2_id));
            document.getElementById("level2" + categoryListPageSubjectLevel3Item.level2_id)?.click();
            flagCheck = true;
            break;
          }
        }
      }
    }
  }

  toggleToFilter($event: any, category: CategoryTagListPage) {
    const currentTags = this.getCurrentSearchCategoryTag();
    const index = currentTags.findIndex(tag => tag.id === category.id);
    if (index !== -1) {
      currentTags.splice(index, 1);
    } else {
      const addSuccessFully = this.listPageMainService.updateCurrentSearchCategoryTag(category);
      if (!addSuccessFully) {
        this.notifyToastCall.emit({ type: "warning", title: "Giới hạn tìm kiếm", desc:"Chỉ có thể tìm kiếm tối đa theo 5 thẻ" });
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
