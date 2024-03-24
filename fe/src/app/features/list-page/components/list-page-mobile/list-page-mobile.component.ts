import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ListPageMainService } from '../../services/list-page-main.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Subscription } from 'rxjs';
import { HamburgerComponent } from 'src/app/shareds/main-shared/components/hamburger/hamburger.component';
import { CategoryTagListPage } from '../../models/category-tag-list-page';

@Component({
  selector: 'app-list-page-mobile',
  templateUrl: './list-page-mobile.component.html',
  styleUrls: ['./list-page-mobile.component.css']
})
export class ListPageMobileComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('mobileHamburger', { static: false }) mobileHamburger: HamburgerComponent | undefined;
  mobileSearchInput: string = "";
  isExhibitionLoading: boolean = true;
  isPreviewModalShow: boolean = false;
  isHamburgerShow: boolean = false;
  isMobileCartShow: boolean = false;
  isMobileCategoryTagShow: boolean = false;
  user: SocialUser | undefined;
  private subscription: Subscription | undefined;
  private searchSubscription: Subscription = new Subscription();

  // DOM Element
  mobileSearchInputDOM: any;

  constructor(
    private listPageMainService: ListPageMainService,
    private authService: AuthService,
    private socialAuthService: SocialAuthService
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      if (user) {
        this.authService.login(user);
      }
    });

    this.searchSubscription.add(this.listPageMainService.triggerSearchPainting$.subscribe(() => {
      this.searchPanting();
    }));

    this.isExhibitionLoading = true;
    setTimeout(() => {
      this.isExhibitionLoading = false;
    }, 600);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    this.mobileSearchInputDOM = document.getElementById("searchMobileInputDOM");
  }

  /*#region Auth */
  isLogged() {
    return this.authService.isLogged;
  }

  googleSignIn(googleWrapper: any) {
    googleWrapper.click();
  }

  logOut() {
    this.authService.logOut();
  }

  getUserFullName() {
    return this.authService.getUserFullName();
  }

  getUserAvatar() {
    return this.authService.getUserAvatar();
  }
  /*#endregion*/

  /*#region Search Input */
  toggleMobileSearchInput($event: any) {
    const headerSearchGroup = $event.target.parentNode as HTMLElement;
    headerSearchGroup.classList.toggle("expand");
    headerSearchGroup.previousElementSibling?.classList.toggle("invisible");
  }

  clearSearchInput() {
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
    this.clearSearchInput();
    this.searchPanting();
  }

  searchPanting() {
    if (this.isHamburgerShow) {
      this.mobileHamburger?.toggleHamburger();
    }

    this.isExhibitionLoading = true;
    setTimeout(() => {
      this.isExhibitionLoading = false;
    }, 600);
  }

  toggleToFilter(category: CategoryTagListPage) {
    const currentTags = this.getCurrentSearchCategoryTag();
    const index = currentTags.findIndex(tag => tag.id === category.id);
    if (index !== -1) {
      currentTags.splice(index, 1);
      this.listPageMainService.searchPainting();
    } else {
      this.listPageMainService.updateCurrentSearchCategoryTag(category);
    }
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
    this.isHamburgerShow = !this.isHamburgerShow;
  }

  toggelMobileCart() {
    if (this.isMobileCategoryTagShow) {
      this.togglMobileCategoryTag();
    }

    this.isMobileCartShow = !this.isMobileCartShow;
    this.listPageMainService.mobileCategoryCurrentLevel = 1;
    document.getElementById("mobileCartIcon")?.classList.toggle("activated");
  }

  togglMobileCategoryTag() {
    if (this.isMobileCartShow) {
      this.toggelMobileCart();
    }

    this.isMobileCategoryTagShow = !this.isMobileCategoryTagShow;
    document.getElementById("mobileCategoryTagIcon")?.classList.toggle("activated");
  }
  /*#endregion*/

}
