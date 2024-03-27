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

  showServiceCategory(category: string) {
      this.currentServiceCategory = category;
  }
}
