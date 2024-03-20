import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MediaQueriesService } from 'src/app/core/services/media-queries.service';
import { ListPageDesktopBodyComponent } from '../list-page-desktop-body/list-page-desktop-body.component';
import { ListPageDesktopSideBarComponent } from '../list-page-desktop-side-bar/list-page-desktop-side-bar.component';
import { ListPageTabletSideBarComponent } from '../list-page-tablet-side-bar/list-page-tablet-side-bar.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  @ViewChild('listPageDesktopBody', {static: false}) listPageDesktopBody: ListPageDesktopBodyComponent | undefined;
  @ViewChild('listPageDesktopSideBar', {static: false}) listPageDesktopSideBar: ListPageDesktopSideBarComponent | undefined;
  @ViewChild('listPageTabletSideBar', {static: false}) listPageTabletSideBar: ListPageTabletSideBarComponent | undefined;

  isContentLoaded: boolean = true;
  isLoginModalOpen: boolean = false;

  constructor(
    private mediaQueriesService: MediaQueriesService,
    private changeDectector: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
  }

  handleToggleTermAndServicePopUp() {
    if (this.listPageDesktopBody) {
      this.listPageDesktopBody.toggleTermAndServicePopUp();
    }
  }

  handleResetAsideCategory($event: any) {
    if (this.listPageDesktopSideBar) {
      this.listPageDesktopSideBar.toggleCategoryContent($event.displayedCategory);
    }

    if (this.listPageTabletSideBar) {
      this.listPageTabletSideBar.toggleCategoryContent($event.displayedCategory);
    }
  }

  handleToggleCategoryContent($event: any) {
    if (this.listPageDesktopBody) {
      this.listPageDesktopBody.toggleCategoryContent($event);
    }
  }

  getBreakpointValues(screen: string) {
    return this.mediaQueriesService.breakPointMap.get(screen);
  }

  getViewportWidth() {
    return this.mediaQueriesService.viewportWidth;
  }

  handleToggleLoginModal() {
    this.isLoginModalOpen = !this.isLoginModalOpen;
    this.changeDectector.markForCheck();
  }
}
