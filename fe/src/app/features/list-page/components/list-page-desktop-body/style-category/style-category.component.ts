import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-style-category',
  templateUrl: './style-category.component.html',
  styleUrls: ['./style-category.component.css']
})
export class StyleCategoryComponent implements AfterViewInit {
  isViewLoaded: boolean = true;

  ngAfterViewInit(): void {
    const accordions = document.getElementsByClassName("wrapper__accordion") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < accordions.length; i++) {
      accordions[i].addEventListener("click", function () {
        accordions[i].classList.toggle("toggle");
        const accordionsPanel = accordions[i].nextElementSibling as HTMLElement;
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

    const specialAccordions = document.getElementsByClassName("wrapper__accordion-group-special__classify-group__accordion") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < specialAccordions.length; i++) {
      specialAccordions[i].addEventListener("click", function () {
        specialAccordions[i].classList.toggle("toggle");
        const specialAccordionsPanel = specialAccordions[i].nextElementSibling as HTMLElement;
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
}
