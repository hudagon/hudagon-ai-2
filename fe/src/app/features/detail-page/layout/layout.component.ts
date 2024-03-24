import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  previewPaintingId: any = 0;

  constructor(
    private router: Router,
  ) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      const state = this.router.getCurrentNavigation()?.extras.state as {previewPaintingId: number};
      this.previewPaintingId = state['previewPaintingId'];
    }
  }

  ngOnInit(): void {
  }
}
