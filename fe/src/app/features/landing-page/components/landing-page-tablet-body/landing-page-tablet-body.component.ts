import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page-tablet-body',
  templateUrl: './landing-page-tablet-body.component.html',
  styleUrls: ['./landing-page-tablet-body.component.css']
})
export class LandingPageTabletBodyComponent implements OnInit {
  currentServiceCategory: string = "";

  ngOnInit(): void {
    this.currentServiceCategory = "subject";
  }

  showServiceCategory(category: string) {
    this.currentServiceCategory = category;
  }

  notifyToggleResume() {
    const rightSideInsideFrameContainter = document.getElementById("right-side__inside__frame-containter");
    if (rightSideInsideFrameContainter) {
      rightSideInsideFrameContainter.classList.toggle("no-animation");
    }
  }

  handleToggleTheme() {
    const rightSideInside = document.getElementById("right-side__inside");
    if (rightSideInside) {
      rightSideInside.classList.toggle("dark-mode");
    }
  }
}
