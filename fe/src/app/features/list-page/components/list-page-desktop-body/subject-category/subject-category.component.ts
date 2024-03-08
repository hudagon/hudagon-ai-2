import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-category',
  templateUrl: './subject-category.component.html',
  styleUrls: ['./subject-category.component.css']
})
export class SubjectCategoryComponent implements OnInit, AfterViewInit {
  isViewLoaded: boolean = true;

  ngOnInit(): void {

  }

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
  }

  addToFilter($event: any) {
    $event.stopPropagation();
  }
}
