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

  isViewLoaded: boolean = true;

  constructor(
    private listPageMainService: ListPageMainService
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const accordionIcons = document.getElementsByClassName("wrapper__accordion__icon") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < accordionIcons.length; i++) {
      accordionIcons[i].addEventListener("click", function () {
        const accordion = accordionIcons[i].parentNode as HTMLElement;
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
  }

  addToPreview(category: CategoryTagListPage) {
    this.listPageMainService.updatePreviewCategory(category);
  }

  toggleToFilter($event: any, category: CategoryTagListPage) {
    $event.stopPropagation();
    const currentTags = this.getCurrentSearchCategoryTag();
    const index = currentTags.findIndex(tag => tag.id === category.id);
    if (index !== -1) {
      currentTags.splice(index, 1);
    } else {
      const addSuccessFully = this.listPageMainService.updateCurrentSearchCategoryTag(category);
      if (!addSuccessFully) {
        $event.target.checked = false;
        this.notifyToastCall.emit({ type: "warning", title: "Giới hạn tìm kiếm", desc:"Chỉ có thể tìm kiếm tối đa theo 6 tiêu chí" });
      }
    }
  }

  getCurrentSearchCategoryTag() {
    return this.listPageMainService.currentSearchCategoryTag;
  }

  isCategoryTagSelected(categoryTag: any) {
    return this.getCurrentSearchCategoryTag().some(tag => tag.id === categoryTag.id);
  }
}
