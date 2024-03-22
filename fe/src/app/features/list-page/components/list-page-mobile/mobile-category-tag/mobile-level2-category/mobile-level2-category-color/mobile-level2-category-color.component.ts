import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-level2-category-color',
  templateUrl: './mobile-level2-category-color.component.html',
  styleUrls: ['./mobile-level2-category-color.component.css']
})
export class MobileLevel2CategoryColorComponent {
  @Input() level1CategoryId: any;
}
