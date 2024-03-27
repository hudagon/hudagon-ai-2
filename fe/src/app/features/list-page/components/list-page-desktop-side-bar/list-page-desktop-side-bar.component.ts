import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MainSharedService } from 'src/app/shareds/main-shared/services/main-shared.service';

@Component({
  selector: 'app-list-page-desktop-side-bar',
  templateUrl: './list-page-desktop-side-bar.component.html',
  styleUrls: ['./list-page-desktop-side-bar.component.css']
})
export class ListPageDesktopSideBarComponent implements OnInit, AfterViewInit {
  @Output() notifyToggleCategoryContent = new EventEmitter();
  lastChosenCategory: string = "";

  // DOM ELEMENT 
  subjectCategory: any;
  topicCategory: any;
  styleCategory: any;
  ratioCategory: any;
  colorCategory: any;

  constructor(
    private mainSharedService: MainSharedService
  ) {
  }

  ngOnInit(): void {
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

  getThemeMode() {
    return this.mainSharedService.isDarkMode;
  }

}
