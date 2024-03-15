import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-category',
  templateUrl: './style-category.component.html',
  styleUrls: ['./style-category.component.css']
})
export class StyleCategoryComponent implements AfterViewInit, OnInit {
  isViewLoaded: boolean = true;
  categoryStyleList: any[] = [];

  ngOnInit(): void {
    this.categoryStyleList = [
      {
        level2Id: 1,
        level2Name: "Nhiếp ảnh",
        level3List: [
          { id: 1, name: 'Nhiếp ảnh 1' },
          { id: 2, name: 'Nhiếp ảnh 2' },
          { id: 3, name: 'Nhiếp ảnh 3' },
          { id: 4, name: 'Nhiếp ảnh 4' },
          { id: 5, name: 'Nhiếp ảnh 5' },
          { id: 6, name: 'Nhiếp ảnh 6' },
          { id: 7, name: 'Nhiếp ảnh 7' },
          { id: 8, name: 'Nhiếp ảnh 8' }
        ]
      },
      {
        level2Id: 2,
        level2Name: "Hội họa",
        level3List: [
          { id: 9, name: 'Khác' },
          { id: 10, name: 'Chất liệu 1', desc: 'chất liệu' },
          { id: 11, name: 'Chất liệu 2', desc: 'chất liệu' },
          { id: 12, name: 'Chất liệu 3', desc: 'chất liệu' },
          { id: 13, name: 'Chất liệu 4', desc: 'chất liệu' },
          { id: 14, name: 'Chất liệu 5', desc: 'chất liệu' },
          { id: 15, name: 'Trường phái 6', desc: 'trường phái' },
          { id: 16, name: 'Trường phái 7', desc: 'trường phái' },
          { id: 17, name: 'Trường phái 8', desc: 'trường phái' },
          { id: 18, name: 'Trường phái 9', desc: 'trường phái' },
        ]
      },
      {
        level2Id: 3,
        level2Name: "Dựa trên tác giả",
        level3List: [
          { id: 14, name: 'Khác' },
          { id: 15, name: 'Dựa trên tác giả 1', desc: 'thế giới' },
          { id: 16, name: 'Dựa trên tác giả 2', desc: 'thế giới' },
          { id: 17, name: 'Dựa trên tác giả 3', desc: 'thế giới' },
          { id: 18, name: 'Dựa trên tác giả 4', desc: 'thế giới' },
          { id: 19, name: 'Dựa trên tác giả 5', desc: 'Việt Nam' },
          { id: 20, name: 'Dựa trên tác giả 6', desc: 'Việt Nam' },
          { id: 21, name: 'Dựa trên tác giả 7', desc: 'Việt Nam' },
          { id: 22, name: 'Dựa trên tác giả 8', desc: 'Việt Nam' },
        ]
      }
    ];
  }

  ngAfterViewInit(): void {
    const accordionIcons = document.getElementsByClassName("wrapper__accordion__icon") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < accordionIcons.length; i++) {
      accordionIcons[i].addEventListener("click", function () {
        const accordion = accordionIcons[i].parentNode as HTMLElement;
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

    const accordionSpecialIcons = document.getElementsByClassName("wrapper__accordion__icon__special") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < accordionSpecialIcons.length; i++) {
      accordionSpecialIcons[i].addEventListener("click", function () {
        const specialAccordion =  accordionSpecialIcons[i].parentNode as HTMLElement;
        specialAccordion.classList.toggle("toggle");
        const specialAccordionsPanel = specialAccordion.nextElementSibling as HTMLElement;
        if (specialAccordionsPanel) {
          specialAccordionsPanel.classList.toggle("toggle");
          if (specialAccordionsPanel.style.maxHeight) {
            specialAccordionsPanel.style.maxHeight = "";
          } else {
            specialAccordionsPanel.style.maxHeight = 999 + "px";
          }
        }
      });
    }

    const specialLevel3Accordions = document.getElementsByClassName("wrapper__accordion-group-special__classify-group__panel__slash-group") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < specialLevel3Accordions.length; i++) {
      specialLevel3Accordions[i].addEventListener("click", function () {
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
    return level3List.some(item => item.desc && item.desc.trim() !== '');
  }
  
  extractUniqueDescs(level3List: any[]) {
    const descsSet = new Set<string>(); 
    for (let item of level3List) {
      if (item.desc) {
        descsSet.add(item.desc);
      }
    }
    return Array.from(descsSet);
  }
}
