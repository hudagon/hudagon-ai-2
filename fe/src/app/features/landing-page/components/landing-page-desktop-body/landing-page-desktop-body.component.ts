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
}
