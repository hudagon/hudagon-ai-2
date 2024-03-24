import { Component } from '@angular/core';
import { ListPageMainService } from 'src/app/features/list-page/services/list-page-main.service';
import { ToastService } from 'src/app/shareds/main-shared/services/toast.service';

@Component({
  selector: 'app-mobile-level3-category',
  templateUrl: './mobile-level3-category.component.html',
  styleUrls: ['./mobile-level3-category.component.css']
})
export class MobileLevel3CategoryComponent {
  constructor(
    private listPageMainService: ListPageMainService,
  ) {
  }

  getCurrentLevel1CategoryId() {
    return this.listPageMainService.categoryMobileLevel1CurrentId;
  }
}
