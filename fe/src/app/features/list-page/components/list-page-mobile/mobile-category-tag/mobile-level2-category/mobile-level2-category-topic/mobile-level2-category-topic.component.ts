import { Component, Input, OnInit } from '@angular/core';
import { ListPageMainService } from 'src/app/features/list-page/services/list-page-main.service';

@Component({
  selector: 'app-mobile-level2-category-topic',
  templateUrl: './mobile-level2-category-topic.component.html',
  styleUrls: ['./mobile-level2-category-topic.component.css']
})
export class MobileLevel2CategoryTopicComponent implements OnInit {
  @Input() level1CategoryId: any;
  level3CategoryTopicListRaw: any[] = [];
  level3CategoryTopicList: any[] = [];

  constructor(
    private listPageMainService: ListPageMainService
  ) {
  }

  ngOnInit(): void {
    this.level3CategoryTopicListRaw = [
      {
        'id': 91,
        'name': 'topic_1',
        'level2CategoryId': 10,
        'level2CategoryName': 'topic',
        'categoryDesc': ''
      },
      {
        'id': 92,
        'name': 'topic_2',
        'level2CategoryId': 10,
        'level2CategoryName': 'topic',
        'categoryDesc': ''
      },
      {
        'id': 93,
        'name': 'topic_3',
        'level2CategoryId': 10,
        'level2CategoryName': 'topic',
        'categoryDesc': ''
      },
      {
        'id': 94,
        'name': 'topic_4',
        'level2CategoryId': 10,
        'level2CategoryName': 'topic',
        'categoryDesc': ''
      },
      {
        'id': 95,
        'name': 'topic_5',
        'level2CategoryId': 10,
        'level2CategoryName': 'topic',
        'categoryDesc': ''
      },
      {
        'id': 96,
        'name': 'topic_6',
        'level2CategoryId': 10,
        'level2CategoryName': 'topic',
        'categoryDesc': ''
      },
      {
        'id': 97,
        'name': 'topic_7',
        'level2CategoryId': 10,
        'level2CategoryName': 'topic',
        'categoryDesc': ''
      },
      {
        'id': 98,
        'name': 'topic_8',
        'level2CategoryId': 10,
        'level2CategoryName': 'topic',
        'categoryDesc': ''
      },
      {
        'id': 99,
        'name': 'topic_9',
        'level2CategoryId': 10,
        'level2CategoryName': 'topic',
        'categoryDesc': ''
      },
      {
        'id': 100,
        'name': 'topic_other',
        'level2CategoryId': 10,
        'level2CategoryName': 'topic',
        'categoryDesc': ''
      }
    ];

    this.level3CategoryTopicList = this.listPageMainService.transformCategoryListWithLevels(this.level3CategoryTopicListRaw);
  }

  isContainsOther(level3ItemName: string) {
    return level3ItemName.includes("other");
  }
}
