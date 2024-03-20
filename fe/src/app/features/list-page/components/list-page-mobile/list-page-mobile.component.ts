import { Component } from '@angular/core';
import { ListPageMainService } from '../../services/list-page-main.service';

@Component({
  selector: 'app-list-page-mobile',
  templateUrl: './list-page-mobile.component.html',
  styleUrls: ['./list-page-mobile.component.css']
})
export class ListPageMobileComponent {
  mobileSearchInput: string = "";

  constructor(
    private listPageMainService: ListPageMainService
  ) {
  }

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

  /*#region Search Tag */
  getCurrentSearchCategoryTag() {
    return this.listPageMainService.currentSearchCategoryTag;
  }
  /*#endregion*/
}
