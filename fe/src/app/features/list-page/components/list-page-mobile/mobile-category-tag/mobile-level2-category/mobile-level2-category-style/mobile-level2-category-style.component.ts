import { Component, Input } from '@angular/core';
import { ListPageMainService } from 'src/app/features/list-page/services/list-page-main.service';

@Component({
  selector: 'app-mobile-level2-category-style',
  templateUrl: './mobile-level2-category-style.component.html',
  styleUrls: ['./mobile-level2-category-style.component.css']
})
export class MobileLevel2CategoryStyleComponent {
  level2CategorySubjectList: any[] = [];

  constructor(
    private listPageMainService: ListPageMainService
  ) {
  }

  ngOnInit(): void {
    this.level2CategorySubjectList = [
      {
        id: 7,
        name: 'style_1',
        level1CategoryId: 3
      },
      {
        id: 8,
        name: 'style_2',
        level1CategoryId: 3
      },
      {
        id: 9,
        name: 'style_3',
        level1CategoryId: 3
      }
    ];
  }

  moveTolevel3(categoryName: string, categoryId: any) {
    this.listPageMainService.categorySubjectLevel2CurrentName = categoryName;
    this.listPageMainService.categoryMobileLevel2CurrentId = categoryId;
    this.listPageMainService.mobileCategoryCurrentLevel = 3;
    this.listPageMainService.updateBreadcrump();
  }
}
