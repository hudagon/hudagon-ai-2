import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ListPageMainService } from '../../../services/list-page-main.service';

@Component({
  selector: 'app-style-category',
  templateUrl: './style-category.component.html',
  styleUrls: ['./style-category.component.css']
})
export class StyleCategoryComponent implements AfterViewInit, OnInit {
  isViewLoaded: boolean = true;
  categoryStyleListRaw: any[] = [];
  categoryStyleList: any[] = [];

  constructor(
    private listPageMainService: ListPageMainService
  ) {
  }

  ngOnInit(): void {
    this.categoryStyleListRaw = [
      { "id": 61, "name": "style_1_1", "categoryDesc": "", "level2CategoryId": 7, "level2CategoryName": "style_1" },
      { "id": 62, "name": "style_1_2", "categoryDesc": "", "level2CategoryId": 7, "level2CategoryName": "style_1" },
      { "id": 63, "name": "style_1_3", "categoryDesc": "", "level2CategoryId": 7, "level2CategoryName": "style_1" },
      { "id": 64, "name": "style_1_4", "categoryDesc": "", "level2CategoryId": 7, "level2CategoryName": "style_1" },
      { "id": 65, "name": "style_1_5", "categoryDesc": "", "level2CategoryId": 7, "level2CategoryName": "style_1" },
      { "id": 66, "name": "style_1_6", "categoryDesc": "", "level2CategoryId": 7, "level2CategoryName": "style_1" },
      { "id": 67, "name": "style_1_7", "categoryDesc": "", "level2CategoryId": 7, "level2CategoryName": "style_1" },
      { "id": 68, "name": "style_1_8", "categoryDesc": "", "level2CategoryId": 7, "level2CategoryName": "style_1" },
      { "id": 69, "name": "style_1_9", "categoryDesc": "", "level2CategoryId": 7, "level2CategoryName": "style_1" },
      { "id": 70, "name": "style_1_other", "categoryDesc": "", "level2CategoryId": 7, "level2CategoryName": "style_1" },
      { "id": 71, "name": "style_2_1", "categoryDesc": "material", "level2CategoryId": 8, "level2CategoryName": "style_2" },
      { "id": 72, "name": "style_2_2", "categoryDesc": "school", "level2CategoryId": 8, "level2CategoryName": "style_2" },
      { "id": 73, "name": "style_2_3", "categoryDesc": "material", "level2CategoryId": 8, "level2CategoryName": "style_2" },
      { "id": 74, "name": "style_2_4", "categoryDesc": "school", "level2CategoryId": 8, "level2CategoryName": "style_2" },
      { "id": 75, "name": "style_2_5", "categoryDesc": "material", "level2CategoryId": 8, "level2CategoryName": "style_2" },
      { "id": 76, "name": "style_2_6", "categoryDesc": "school", "level2CategoryId": 8, "level2CategoryName": "style_2" },
      { "id": 77, "name": "style_2_7", "categoryDesc": "material", "level2CategoryId": 8, "level2CategoryName": "style_2" },
      { "id": 78, "name": "style_2_8", "categoryDesc": "school", "level2CategoryId": 8, "level2CategoryName": "style_2" },
      { "id": 79, "name": "style_2_9", "categoryDesc": "material", "level2CategoryId": 8, "level2CategoryName": "style_2" },
      { "id": 80, "name": "style_2_other", "categoryDesc": "", "level2CategoryId": 8, "level2CategoryName": "style_2" },
      { "id": 81, "name": "style_3_1", "categoryDesc": "vietnam", "level2CategoryId": 9, "level2CategoryName": "style_3" },
      { "id": 82, "name": "style_3_2", "categoryDesc": "foreign", "level2CategoryId": 9, "level2CategoryName": "style_3" },
      { "id": 83, "name": "style_3_3", "categoryDesc": "vietnam", "level2CategoryId": 9, "level2CategoryName": "style_3" },
      { "id": 84, "name": "style_3_4", "categoryDesc": "foreign", "level2CategoryId": 9, "level2CategoryName": "style_3" },
      { "id": 85, "name": "style_3_5", "categoryDesc": "vietnam", "level2CategoryId": 9, "level2CategoryName": "style_3" },
      { "id": 86, "name": "style_3_6", "categoryDesc": "foreign", "level2CategoryId": 9, "level2CategoryName": "style_3" },
      { "id": 87, "name": "style_3_7", "categoryDesc": "vietnam", "level2CategoryId": 9, "level2CategoryName": "style_3" },
      { "id": 88, "name": "style_3_8", "categoryDesc": "foreign", "level2CategoryId": 9, "level2CategoryName": "style_3" },
      { "id": 89, "name": "style_3_9", "categoryDesc": "vietnam", "level2CategoryId": 9, "level2CategoryName": "style_3" },
      { "id": 90, "name": "style_3_other", "categoryDesc": "", "level2CategoryId": 9, "level2CategoryName": "style_3" }
    ];

    this.categoryStyleList = this.listPageMainService.transformCategoryListWithLoop(this.categoryStyleListRaw);
  }

  ngAfterViewInit(): void {
    const accordions = document.getElementsByClassName("wrapper__accordion") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < accordions.length; i++) {
      accordions[i].addEventListener("click", function () {
        const accordion = accordions[i] as HTMLElement;
        accordion.classList.toggle("toggle");
        const accordionsPanel = accordion.nextElementSibling as HTMLElement;

        if (accordionsPanel) {
          accordionsPanel.classList.toggle("toggle");
          if (accordionsPanel.style.maxHeight) {
            accordionsPanel.style.maxHeight = "";
          } else {
            accordionsPanel.style.maxHeight = accordionsPanel.scrollHeight + "px";
          }
        }
      });
    }

    const accordionSpecials = document.getElementsByClassName("wrapper__accordion-group-special") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < accordionSpecials.length; i++) {
      accordionSpecials[i].addEventListener("click", function () {
        const specialAccordion =  accordionSpecials[i] as HTMLElement;
        specialAccordion.classList.toggle("toggle");
        const specialAccordionsPanel = specialAccordion.nextElementSibling as HTMLElement;
        if (specialAccordionsPanel) {
          specialAccordionsPanel.classList.toggle("toggle");
          if (specialAccordionsPanel.style.maxHeight) {
            specialAccordionsPanel.style.maxHeight = "";
          } else {
            specialAccordionsPanel.style.maxHeight = 9999 + "px";
          }
        }
      });
    }

    const specialLevel3Accordions = document.getElementsByClassName("wrapper__accordion-group-special") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < specialLevel3Accordions.length; i++) {
      specialLevel3Accordions[i].addEventListener("click", function () {
        console.log(specialLevel3Accordions[i]);
        specialLevel3Accordions[i].classList.toggle("toggle");
        const specialLevel3AccordionsPanel = specialLevel3Accordions[i].nextElementSibling as HTMLElement;
        if (specialLevel3AccordionsPanel) {
          specialLevel3AccordionsPanel.classList.toggle("toggle");
          if (specialLevel3AccordionsPanel.style.maxHeight) {
            specialLevel3AccordionsPanel.style.maxHeight = "";
          } else {
            let items = specialLevel3AccordionsPanel.getElementsByClassName("wrapper__accordion-group-special__classify-group__panel__level3-group__item") as HTMLCollectionOf<HTMLElement>;
            specialLevel3AccordionsPanel.style.maxHeight = 72*items.length + "px";
          }
        }
      });
    }
  }

  addToFilter($event: MouseEvent) {
    $event.stopPropagation();
  }

  hasDescription(level3List: any[]): boolean {
    for (let i = 0; i < level3List.length; i++) {
      if (!level3List[i].name.includes("other")) {
        if (level3List[i].categoryDesc.trim() == '') {
          return false;
        }
      }
    }
    return true;
  }
  
  extractUniqueDescs(level3List: any[]) {
    const descsSet = new Set<string>(); 
    for (let item of level3List) {
      if (item.categoryDesc) {
        descsSet.add(item.categoryDesc);
      }
    }
    return Array.from(descsSet);
  }
}
