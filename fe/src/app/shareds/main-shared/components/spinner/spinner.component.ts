import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  @Input() spinnerSize: string | undefined;

  ngOnInit(): void {
    if(this.spinnerSize) {
      document.getElementById("loader")?.classList.add(this.spinnerSize);
    } else {
      document.getElementById("loader")?.classList.add("md");
    }
  }
}
