import { Component, OnInit } from '@angular/core';
import { ListPageMainService } from 'src/app/features/list-page/services/list-page-main.service';

@Component({
  selector: 'app-mobile-level1-category',
  templateUrl: './mobile-level1-category.component.html',
  styleUrls: ['./mobile-level1-category.component.css']
})
export class MobileLevel1CategoryComponent implements OnInit {
  categoryLevel1List: any[] = [];

  constructor(
    private listPageMainService: ListPageMainService
  ) {}

  ngOnInit(): void {
    this.categoryLevel1List = [
      {
        id: 1,
        name: 'subject',
        vietnameseName: 'Chủ thể',
        faIcon: "fa-solid fa-icons"
      },
      {
        id: 2,
        name: 'topic',
        vietnameseName: 'Chủ đề',
        faIcon: "fa-solid fa-expand"
      },
      {
        id: 3,
        name: 'style',
        vietnameseName: 'Phong cách',
        faIcon: "fa-solid fa-paintbrush"
      },
      {
        id: 4,
        name: 'ratio',
        vietnameseName: 'Tỉ lệ',
        faIcon: "fa-solid fa-palette"
      },
      {
        id: 5,
        name: 'color',
        vietnameseName: 'Màu sắc',
        faIcon: "fa-solid fa-image"
      }
    ];
  }

  moveTolevel2(categoryName: any, categoryId: any) {
    this.listPageMainService.categorySubjectLevel1CurrentName = categoryName;
    this.listPageMainService.categoryMobileLevel1CurrentId = categoryId;
    this.listPageMainService.mobileCategoryCurrentLevel = 2;
    this.listPageMainService.updateBreadcrump();
  }
}
