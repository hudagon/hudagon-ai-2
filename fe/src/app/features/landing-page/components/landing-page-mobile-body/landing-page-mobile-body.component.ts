import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page-mobile-body',
  templateUrl: './landing-page-mobile-body.component.html',
  styleUrls: ['./landing-page-mobile-body.component.css']
})
export class LandingPageMobileBodyComponent implements OnInit {
  currentServiceCategory: any;

  ngOnInit(): void {
    this.currentServiceCategory = "subject";
  }

  handleToggleTheme() {
    const galleryInside = document.getElementById("gallery__inside");
    if (galleryInside) {
      galleryInside.classList.toggle("dark-mode");
    }
  }

  handleToggleResume() {
    const galleryInsideFrameContainer = document.getElementById("gallery__inside__frame-container");
    if (galleryInsideFrameContainer) {
      galleryInsideFrameContainer.classList.toggle("no-animation");
    }
  }

  showServiceCategory(category: string) {
      this.currentServiceCategory = category;
  }
}
