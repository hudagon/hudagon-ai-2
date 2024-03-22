import { Component, Input } from '@angular/core';
import { ListPageMainService } from 'src/app/features/list-page/services/list-page-main.service';

@Component({
  selector: 'app-mobile-level2-category-ratio',
  templateUrl: './mobile-level2-category-ratio.component.html',
  styleUrls: ['./mobile-level2-category-ratio.component.css']
})
export class MobileLevel2CategoryRatioComponent {
  @Input() level1CategoryId: any;
  level3CategoryRatioListRaw: any[] = [];
  level3CategoryRatioList: any[] = [];

  constructor(
    private listPageMainService: ListPageMainService
  ) {
  }

  ngOnInit(): void {
    this.level3CategoryRatioListRaw = [{
      'id': 101,
      'name': '1:1',
      'categoryDesc': 'portrait',
      'level2CategoryId': 11,
      'level2CategoryName': 'ratio',
      'level1CategoryId': 4
    },
    {
      'id': 102,
      'name': '3:4',
      'categoryDesc': 'landscape',
      'level2CategoryId': 11,
      'level2CategoryName': 'ratio',
      'level1CategoryId': 4
    },
    {
      'id': 103,
      'name': '4:3',
      'categoryDesc': 'portrait',
      'level2CategoryId': 11,
      'level2CategoryName': 'ratio',
      'level1CategoryId': 4
    },
    {
      'id': 104,
      'name': '16:9',
      'categoryDesc': 'landscape',
      'level2CategoryId': 11,
      'level2CategoryName': 'ratio',
      'level1CategoryId': 4
    },
    {
      'id': 105,
      'name': '9:16',
      'categoryDesc': 'portrait',
      'level2CategoryId': 11,
      'level2CategoryName': 'ratio',
      'level1CategoryId': 4
    }
    ];

    this.level3CategoryRatioList = this.listPageMainService.transformCategoryListWithLevels(this.level3CategoryRatioListRaw);
  }

}
