import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaQueriesService } from 'src/app/core/services/media-queries.service';
import { MainSharedService } from 'src/app/shareds/main-shared/services/main-shared.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isLoginModalOpen: boolean = false;
  isTabletHamburgerOpen: boolean = false;

  constructor(
    private mediaQueriesService: MediaQueriesService,
    private changeDectector: ChangeDetectorRef,
    private mainSharedService: MainSharedService
  ) {
  }

  ngOnInit(): void {
  }

  handleToggleLoginModal() {
    this.isLoginModalOpen = !this.isLoginModalOpen;
    this.changeDectector.markForCheck();
  }

  getBreakpointValues(screen: string) {
    return this.mediaQueriesService.breakPointMap.get(screen);
  }

  getViewportWidth() {
    return this.mediaQueriesService.viewportWidth;
  }

  handleToggleHamburber() {
    this.isTabletHamburgerOpen = !this.isTabletHamburgerOpen;
    this.changeDectector.markForCheck();
  }

  handleToggleHamburgerContent() {
    this.isTabletHamburgerOpen = !this.isTabletHamburgerOpen;
    this.mainSharedService.isHamburgerToggled = !this.mainSharedService.isHamburgerToggled;
    this.changeDectector.markForCheck();
  }
}
