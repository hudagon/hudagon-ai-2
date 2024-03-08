import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page-desktop-body',
  templateUrl: './landing-page-desktop-body.component.html',
  styleUrls: ['./landing-page-desktop-body.component.css']
})
export class LandingPageDesktopBodyComponent {
  currentServiceCategory: string = 'subject';
  
  showServiceCategory(category: string) {
    this.currentServiceCategory = category;
  }

  handleToggleTheme() {
    const bannerRightSide = document.getElementById("banner__right-side");
    if (bannerRightSide) {
      bannerRightSide.classList.toggle("dark-mode");
    }
  }

  handleToggleResume() {
    const desktopFrameContainer = document.getElementById("banner__right-side__frame-container");
    if (desktopFrameContainer) {
      desktopFrameContainer.classList.toggle("no-animation");
    }
  }
}
