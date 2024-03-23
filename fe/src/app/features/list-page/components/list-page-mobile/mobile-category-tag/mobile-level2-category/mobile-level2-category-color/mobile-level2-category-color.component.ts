import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ListPageMainService } from 'src/app/features/list-page/services/list-page-main.service';

@Component({
  selector: 'app-mobile-level2-category-color',
  templateUrl: './mobile-level2-category-color.component.html',
  styleUrls: ['./mobile-level2-category-color.component.css']
})
export class MobileLevel2CategoryColorComponent implements OnInit, AfterViewInit {
  @Input() level1CategoryId: any;
  categoryColorListRaw: any[] = [];
  categoryColorList: any[] = [];

  constructor(
    private listPageMainService: ListPageMainService
  ) { }

  ngOnInit(): void {
    this.categoryColorListRaw = [{
      'id': 107,
      'name': 'Đỏ',
      'categoryDesc': '#e32636',
      'level2CategoryId': 12,
      'level2CategoryName': 'color',
      'level1CategoryId': 5
    },
    {
      'id': 108,
      'name': 'Cam',
      'categoryDesc': '#e69138',
      'level2CategoryId': 12,
      'level2CategoryName': 'color',
      'level1CategoryId': 5
    },
    {
      'id': 109,
      'name': 'Vàng',
      'categoryDesc': '#ffd966',
      'level2CategoryId': 12,
      'level2CategoryName': 'color',
      'level1CategoryId': 5
    },
    {
      'id': 110,
      'name': 'Xanh lục',
      'categoryDesc': '#6aa84f',
      'level2CategoryId': 12,
      'level2CategoryName': 'color',
      'level1CategoryId': 5
    },
    {
      'id': 111,
      'name': 'Xanh lam',
      'categoryDesc': '#3d85c6',
      'level2CategoryId': 12,
      'level2CategoryName': 'color',
      'level1CategoryId': 5
    },
    {
      'id': 112,
      'name': 'Tím',
      'categoryDesc': '#a64d79',
      'level2CategoryId': 12,
      'level2CategoryName': 'color',
      'level1CategoryId': 5
    },
    {
      'id': 113,
      'name': 'Đen',
      'categoryDesc': 'black',
      'level2CategoryId': 12,
      'level2CategoryName': 'color',
      'level1CategoryId': 5
    },
    {
      'id': 114,
      'name': 'Trắng',
      'categoryDesc': 'whitesmoke',
      'level2CategoryId': 12,
      'level2CategoryName': 'color',
      'level1CategoryId': 5
    },
    {
      'id': 115,
      'name': 'Xám',
      'categoryDesc': '#333',
      'level2CategoryId': 12,
      'level2CategoryName': 'color',
      'level1CategoryId': 5
    },
    {
      'id': 116,
      'name': 'Nâu',
      'categoryDesc': 'rgb(94, 43, 9)',
      'level2CategoryId': 12,
      'level2CategoryName': 'color',
      'level1CategoryId': 5
    },
    {
      'id': 117,
      'name': 'Trắng đen',
      'categoryDesc': 'https://www.color-meanings.com/wp-content/uploads/Black-and-white-paint-swirl-1024x683.jpeg',
      'level2CategoryId': 12,
      'level2CategoryName': 'color',
      'level1CategoryId': 5
    },
    {
      'id': 118,
      'name': 'Đa sắc màu',
      'categoryDesc': 'https://media.istockphoto.com/id/1248542684/vector/abstract-blurred-colorful-background.jpg?s=612x612&w=0&k=20&c=6aJX8oyUBsSBZFQUCJDP7KZ1y4vrf-wEH_SJsuq7B5I=',
      'level2CategoryId': 12,
      'level2CategoryName': 'color',
      'level1CategoryId': 5
    }]

    this.categoryColorList = this.listPageMainService.transformCategoryListWithLevels(this.categoryColorListRaw);
  }

  ngAfterViewInit(): void {
    const colorItems = document.getElementsByClassName("color-item");
    for (let i = 0; i < colorItems.length; i++) {
      const colorItem = colorItems[i] as HTMLElement;
      const color = colorItem.getAttribute("data-color");

      if (colorItem && color) {
        colorItem.style.backgroundColor = color;
      }
    }
  }
  
  isSpecialGroup(categoryDesc: string) {
    return categoryDesc.includes("http");
  }
}
