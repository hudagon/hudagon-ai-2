import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CategoryTagListPage } from 'src/app/features/list-page/models/category-tag-list-page';
import { ListPageMainService } from 'src/app/features/list-page/services/list-page-main.service';
import { ToastService } from 'src/app/shareds/main-shared/services/toast.service';

@Component({
  selector: 'app-mobile-level2-category-color',
  templateUrl: './mobile-level2-category-color.component.html',
  styleUrls: ['./mobile-level2-category-color.component.css']
})
export class MobileLevel2CategoryColorComponent implements OnInit, AfterViewInit {
  categoryColorListRaw: any[] = [];
  categoryColorList: any[] = [];

  constructor(
    private listPageMainService: ListPageMainService,
    private toastService: ToastService
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
      'categoryDesc': 'white',
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

  toggleToFilter($event: any, category: CategoryTagListPage) {
    const currentTags = this.getCurrentSearchCategoryTag();
    const index = currentTags.findIndex(tag => tag.id === category.id && tag.level2CategoryId == category.level2CategoryId);
    if (index !== -1) {
      currentTags.splice(index, 1);
      $event.currentTarget.classList.toggle('activated');
      this.listPageMainService.searchPainting();
    } else {

      this.listPageMainService.clearCurrentSearchCategoryTag(category.level2CategoryId + "", null);
      this.removeActivatedCSS();

      const addSuccessFully = this.listPageMainService.updateCurrentSearchCategoryTag(category);
      if (!addSuccessFully) {
        this.toastService.showToast("warning", "Giới hạn tìm kiếm", "Chỉ có thể tìm kiếm tối đa theo 5 thẻ");
      } else {
        this.listPageMainService.searchPainting();
        $event.currentTarget.classList.toggle('activated');
      }
    }
  }

  removeActivatedCSS() {
    const activatedTag = document.getElementById("mobile-color-wrapper")!.getElementsByClassName("activated");
    for (let i = 0; i < activatedTag.length; i++) {
      if (activatedTag[i].classList.contains("activated")) {
        activatedTag[i].classList.remove("activated");
      }
    }
  }


  getCurrentSearchCategoryTag() {
    return this.listPageMainService.currentSearchCategoryTag;
  }

  isCategoryTagSelected(categoryTagId: number, level2CategoryId: number) {
    return this.getCurrentSearchCategoryTag().some(tag => tag.id === categoryTagId && tag.level2CategoryId === level2CategoryId);
  }

  isContainsOther(level3ItemName: string) {
    return level3ItemName.includes("other");
  }
}
