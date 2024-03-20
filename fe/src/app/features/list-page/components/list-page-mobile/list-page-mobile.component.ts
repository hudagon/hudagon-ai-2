import { Component } from '@angular/core';

@Component({
  selector: 'app-list-page-mobile',
  templateUrl: './list-page-mobile.component.html',
  styleUrls: ['./list-page-mobile.component.css']
})
export class ListPageMobileComponent {

  mobileSearchInput: string = "";


  /*#region Search Input */
  toggleMobileSearchInput($event: any) {
    const headerSearchGroup = $event.target.parentNode as HTMLElement;
    headerSearchGroup.classList.toggle("expand");
    headerSearchGroup.previousElementSibling?.classList.toggle("invisible");
  }

  clearSearchInput() {
    this.mobileSearchInput = "";
  }
  /*#endregion*/
}
