import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ListPageMainService } from '../../services/list-page-main.service';

@Component({
  selector: 'app-list-page-mobile',
  templateUrl: './list-page-mobile.component.html',
  styleUrls: ['./list-page-mobile.component.css']
})
export class ListPageMobileComponent implements OnInit, AfterViewInit {
  mobileSearchInput: string = "";
  isExhibitionLoading: boolean = true;
  isPreviewModalShow: boolean = false;

  // DOM Element
  mobileSearchInputDOM: any;

  constructor(
    private listPageMainService: ListPageMainService
  ) {
  }

  ngOnInit(): void {
    this.isExhibitionLoading = true;
    setTimeout(() => {
      this.isExhibitionLoading = false;
    }, 600);
  }

  ngAfterViewInit(): void {
    this.mobileSearchInputDOM = document.getElementById("searchMobileInputDOM");
  }

  /*#region Search Input */
  toggleMobileSearchInput($event: any) {
    const headerSearchGroup = $event.target.parentNode as HTMLElement;
    headerSearchGroup.classList.toggle("expand");
    headerSearchGroup.previousElementSibling?.classList.toggle("invisible");
  }

  clearSearchInput() {
    this.mobileSearchInput = "";
  }

  resetInput() {
    this.mobileSearchInput = "";
  }

  changeSearchInput() {
    if (this.mobileSearchInput == "") {
      this.listPageMainService.clearCurrentSearchCategoryTag("-2", null);
    } else {
      this.listPageMainService.updateCurrentSearchCategoryTag({ id: -2, name: '"' + this.mobileSearchInput + '"', level2CategoryId: -2, level1CategoryId: -2 });
    }

    this.searchPanting();
  }
  /*#endregion*/

  /*#region Search Tag */
  getCurrentSearchCategoryTag() {
    return this.listPageMainService.currentSearchCategoryTag;
  }

  resetSearchSortInfo() {
    this.listPageMainService.currentSearchCategoryTag = [];
    this.resetInput();
  }

  searchPanting() {
    this.isExhibitionLoading = true;
    setTimeout(() => {
      this.isExhibitionLoading = false;
    }, 600);
  }
  /*#endregion*/

  /*#region MODAL */
  togglePreviewPaintingModal() {
    this.isPreviewModalShow = !this.isPreviewModalShow;
  }
  /*#endregion*/

  /*#region UTILITIES */
  handleToggleHamburger() {
    document.getElementById("hamburgerContentDOM")?.classList.toggle("activated");
  }
  /*#endregion*/

}
