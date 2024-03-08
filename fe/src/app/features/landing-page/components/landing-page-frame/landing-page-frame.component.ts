import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page-frame',
  templateUrl: './landing-page-frame.component.html',
  styleUrls: ['./landing-page-frame.component.css']
})
export class LandingPageFrameComponent implements OnInit {
  @Input() imgUrl: string | undefined;
  @Input() aspectRatio: string | undefined; 

  ngOnInit(): void {
  }
}
