import { Component, OnInit } from '@angular/core';
import { ListPageMainService } from 'src/app/features/list-page/services/list-page-main.service';

@Component({
  selector: 'app-mobile-level2-category',
  templateUrl: './mobile-level2-category.component.html',
  styleUrls: ['./mobile-level2-category.component.css']
})
export class MobileLevel2CategoryComponent implements OnInit {

  constructor(
    private listPageMainService: ListPageMainService
  ) {}

  ngOnInit(): void {
  }

  getCurrentLevel1SubjectCategoryName() {
    return this.listPageMainService.categorySubjectLevel1CurrentName;
  }
}
