import { Component, EventEmitter, Output } from '@angular/core';
import { MainSharedService } from 'src/app/shareds/main-shared/services/main-shared.service';

@Component({
  selector: 'app-list-page-tablet-side-bar',
  templateUrl: './list-page-tablet-side-bar.component.html',
  styleUrls: ['./list-page-tablet-side-bar.component.css']
})
export class ListPageTabletSideBarComponent {
  @Output() notifyToggleTermAndServicePopUp = new EventEmitter();
  @Output() notifyToggleCategoryContent = new EventEmitter();
  lastChosenCategory: string = "";
  categoryLevel1List: any[] = [];

  // DOM ELEMENT 
  subjectCategory: any;
  topicCategory: any;
  styleCategory: any;
  ratioCategory: any;
  colorCategory: any;

  constructor(
    private mainSharedService: MainSharedService
  ) {}

  ngOnInit(): void {
    this.categoryLevel1List = [
      {
        id: 1,
        name: 'subject',
        vietnameseName: 'Chủ thể',
        faIcon: "fa-solid fa-icons"
      },
      {
        id: 2,
        name: 'topic',
        vietnameseName: 'Chủ đề',
        faIcon: "fa-solid fa-expand"
      },
      {
        id: 3,
        name: 'style',
        vietnameseName: 'Phong cách',
        faIcon: "fa-solid fa-paintbrush"
      },
      {
        id: 4,
        name: 'ratio',
        vietnameseName: 'Tỉ lệ',
        faIcon: "fa-solid fa-palette"
      },
      {
        id: 5,
        name: 'color',
        vietnameseName: 'Màu sắc',
        faIcon: "fa-solid fa-image"
      }
    ];
  }

  ngAfterViewInit(): void {
    this.subjectCategory = document.getElementById("subject-category");
    this.topicCategory = document.getElementById("topic-category");
    this.styleCategory = document.getElementById("style-category");
    this.ratioCategory = document.getElementById("ratio-category");
    this.colorCategory = document.getElementById("color-category");
  }

  toggleCategoryContent(category: string) {
    switch (category) {
      case "subject":
        this.subjectCategory.classList.toggle("chosen");
        this.topicCategory.classList.remove("chosen");
        this.styleCategory.classList.remove("chosen");
        this.ratioCategory.classList.remove("chosen");
        this.colorCategory.classList.remove("chosen");
        break;
      case "topic":
        this.subjectCategory.classList.remove("chosen");
        this.topicCategory.classList.toggle("chosen");
        this.styleCategory.classList.remove("chosen");
        this.ratioCategory.classList.remove("chosen");
        this.colorCategory.classList.remove("chosen");
        break;
      case "style":
        this.subjectCategory.classList.remove("chosen");
        this.topicCategory.classList.remove("chosen");
        this.styleCategory.classList.toggle("chosen");
        this.ratioCategory.classList.remove("chosen");
        this.colorCategory.classList.remove("chosen");
        break;
      case "ratio":
        this.subjectCategory.classList.remove("chosen");
        this.topicCategory.classList.remove("chosen");
        this.styleCategory.classList.remove("chosen");
        this.ratioCategory.classList.toggle("chosen");
        this.colorCategory.classList.remove("chosen");
        break;
      case "color":
        this.subjectCategory.classList.remove("chosen");
        this.topicCategory.classList.remove("chosen");
        this.styleCategory.classList.remove("chosen");
        this.ratioCategory.classList.remove("chosen");
        this.colorCategory.classList.toggle("chosen");
        break;
    }

    this.notifyToggleCategoryContent.emit({ category });
  }

  toggleTermAndServicePopUp() {
    this.notifyToggleTermAndServicePopUp.emit();
  }
  
  getThemeMode() {
    return this.mainSharedService.isDarkMode;
  }
}
