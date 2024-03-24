import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { DesktopCartDropdownComponent } from './desktop-cart-dropdown/desktop-cart-dropdown.component';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CategoryTagListPage } from '../../models/category-tag-list-page';
import { ListPageMainService } from '../../services/list-page-main.service';
import { ToastService } from 'src/app/shareds/main-shared/services/toast.service';
import { MediaQueriesService } from 'src/app/core/services/media-queries.service';
import { Subscription } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list-page-desktop-body',
  templateUrl: './list-page-desktop-body.component.html',
  styleUrls: ['./list-page-desktop-body.component.css']
})
export class ListPageDesktopBodyComponent implements OnInit, AfterViewInit, OnDestroy {
  @Output() notifyToggleLoginModal: EventEmitter<string> = new EventEmitter();
  @Output() notifyResetAsideCategory = new EventEmitter();
  @ViewChild('desktopCartDropDown', { read: ViewContainerRef }) desktopCartDropDowncontainer: ViewContainerRef | undefined;
  cartFirsTimehover: boolean = false;
  cartFirstTimeClick: boolean = false;
  isExhibitionLoading: boolean = true;

  // DOM ELEMENT
  rightSideBody: any;
  scrollToTopButton: any;
  searchInputDOM: any;

  // Search Sort Info
  searchInput: string = "";
  sortOption: string = 'Sắp xếp';
  isSortOptionShow: boolean = false;
  isSortPristine: boolean = true;
  currentSearchCategoryTag: CategoryTagListPage[] = [];
  private searchSubscription: Subscription = new Subscription();

  // SOMETHING ELSE
  displayedCategory: string = "";
  displayedCategoryTitle: string = "";
  isCategoryContentShow: boolean = false;
  isPreviewModalShow: boolean = false;

  // MODAL PREVIEW PAINTING ID
  previewPaintingId: number = 0;

  constructor(
    private authService: AuthService,
    private listPageMainService: ListPageMainService,
    private toastService: ToastService,
    private mediaQueriesService: MediaQueriesService,
    private router: Router
  ) {
  }

  ngAfterViewInit(): void {
    this.rightSideBody = document.getElementById("right-side-body");
    this.scrollToTopButton = document.getElementById("scroll-to-top");
    this.searchInputDOM = document.getElementById("searchInput");
  }

  ngOnInit(): void {
    this.searchPanting();

    this.searchSubscription.add(this.listPageMainService.triggerSearchPainting$.subscribe(() => {
      this.searchPanting();
    }));
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

  /*#region Search Group */
  resetSearchSortInfo() {
    this.listPageMainService.currentSearchCategoryTag = [];
    this.resetInput();
  }

  getCurrentSearchCategoryTag() {
    return this.listPageMainService.currentSearchCategoryTag;
  }

  changeSearchInput() {
    if (this.searchInput == "") {
      this.listPageMainService.clearCurrentSearchCategoryTag("-2", null);
    } else {
      this.listPageMainService.updateCurrentSearchCategoryTag({ id: -2, name: '"' + this.searchInput + '"', level2CategoryId: -2, level1CategoryId: -2 });
    }

    this.searchPanting();
    this.searchInputDOM?.focus();
  }

  searchPanting() {
    this.isExhibitionLoading = true;
    setTimeout(() => {
      this.isExhibitionLoading = false;
    }, 1200);
  }
  /*#endregion*/

  /*#region Filter Group */
  toggleToFilter(category: CategoryTagListPage) {
    const currentTags = this.getCurrentSearchCategoryTag();
    const index = currentTags.findIndex(tag => tag.id === category.id);
    if (index !== -1) {
      currentTags.splice(index, 1);
    } else {
      this.listPageMainService.updateCurrentSearchCategoryTag(category);
    }
  }

  resetInput() {
    this.listPageMainService.searchPainting();
    this.searchInput = "";
    this.searchInputDOM?.focus();
  }
  /*#endregion*/

  /*#region Modal Group */
  togglePreviewModal(paintingId: any) {
    if (paintingId) {
      this.previewPaintingId = paintingId;
    }
    this.isPreviewModalShow = !this.isPreviewModalShow;
  }

  toggleLoginModal() {
    this.notifyToggleLoginModal.emit();
  }
  /*#endregion*/

  /*#region Utilities Group */
  moveToDetail() {
    const navigationExtras: NavigationExtras = {
      state: {
        previewPaintingId: this.previewPaintingId,
      }
    };
    this.router.navigate(['/detail'], navigationExtras);
  }

  handleToastCall($event: any) {
    this.toastService.showToast($event.type, $event.title, $event.desc);
  }

  checkScroll() {
    if (this.rightSideBody.scrollTop >= 120) {
      if (!this.scrollToTopButton?.classList.contains("display")) {
        this.scrollToTopButton?.classList.add("display");
      }
    } else {
      if (this.scrollToTopButton?.classList.contains("display")) {
        this.scrollToTopButton?.classList.remove("display");
      }
    }
  }

  scrollToTop() {
    this.rightSideBody?.scroll({ top: 0, behavior: 'smooth' });
  }

  isLogged() {
    return this.authService.isLogged;
  }

  loadDesktopCartDropDown() {
    if (!this.cartFirsTimehover) {
      this.desktopCartDropDowncontainer?.createComponent(DesktopCartDropdownComponent);
      this.cartFirsTimehover = true;
    }
  }

  loadTabletCartDropDown() {
    document.getElementById("rightSideInsideBodyTabletCart")?.classList.toggle("activated");
  }

  toggleTermAndServicePopUp() {
    document.getElementById("termAndService")?.classList.toggle("activated");
  }

  getBreakpointValues(screen: string) {
    return this.mediaQueriesService.breakPointMap.get(screen);
  }

  getViewportWidth() {
    return this.mediaQueriesService.viewportWidth;
  }
  /*#endregion*/

  /*#region SortOption Group */
  toggleCategoryContent($event: any) {
    if ($event.category == this.displayedCategory) {
      this.turnOffCategoryContent("");
      return;
    }

    this.isCategoryContentShow = true;
    this.displayedCategory = $event.category;

    switch (this.displayedCategory) {
      case "subject":
        this.displayedCategoryTitle = "Chủ thể";
        break;
      case "topic":
        this.displayedCategoryTitle = "Chủ đề";
        break;
      case "style":
        this.displayedCategoryTitle = "Phong cách";
        break;
      case "ratio":
        this.displayedCategoryTitle = "Khung hình";
        break;
      case "color":
        this.displayedCategoryTitle = "Màu sắc";
        break;
    }
  }

  turnOffCategoryContent(returnCSS: string) {
    if (returnCSS !== "") {
      this.notifyResetAsideCategory.emit({ displayedCategory: this.displayedCategory });
    }

    this.isCategoryContentShow = false;
    this.displayedCategory = "";
  }

  toggleSortOptions() {
    this.isSortOptionShow = !this.isSortOptionShow;
  }

  toggleSortOptionBlur() {
    if (this.isSortOptionShow) {
      this.isSortOptionShow = !this.isSortOptionShow;
    }
  }

  chooseSortOption(chosen: string) {
    if (chosen !== '') {
      this.sortOption = chosen;
    }
    this.toggleSortOptions();
    this.toggleSortOptions();
  }
  /*#endregion*/
}
