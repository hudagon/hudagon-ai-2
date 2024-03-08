import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-tag',
  templateUrl: './category-tag.component.html',
  styleUrls: ['./category-tag.component.css']
})
export class CategoryTagComponent {
  @Input() categoryTagName: string = "";
  

}
