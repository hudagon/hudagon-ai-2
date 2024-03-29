import { Component, Input, OnInit } from '@angular/core';
import { ListPageMainService } from 'src/app/features/list-page/services/list-page-main.service';

@Component({
  selector: 'app-mobile-level2-category-subject',
  templateUrl: './mobile-level2-category-subject.component.html',
  styleUrls: ['./mobile-level2-category-subject.component.css']
})
export class MobileLevel2CategorySubjectComponent implements OnInit {
  level2CategorySubjectList: any[] = [];

  constructor(
    private listPageMainService: ListPageMainService
  ) {
  }

  ngOnInit(): void {
    this.level2CategorySubjectList = [
      {
        id: 1,
        name: 'subject_1',
        level1CategoryId: 1
      },
      {
        id: 2,
        name: 'subject_2',
        level1CategoryId: 1
      },
      {
        id: 3,
        name: 'subject_3',
        level1CategoryId: 1
      },
      {
        id: 4,
        name: 'subject_4',
        level1CategoryId: 1
      },
      {
        id: 5,
        name: 'subject_5',
        level1CategoryId: 1
      },
      {
        id: 6,
        name: 'subject_6',
        level1CategoryId: 1
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
