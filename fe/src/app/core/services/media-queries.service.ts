import { Injectable, OnDestroy } from '@angular/core';
import { BreakpointsMap } from '../constants/breakPoints';

@Injectable({
  providedIn: 'root'
})
export class MediaQueriesService implements OnDestroy {
  breakPointMap: Map<string, number> = new Map();
  viewportWidth: number = 0;

  constructor() {
    this.breakPointMap = BreakpointsMap; 
    this.viewportWidth = window.innerWidth;
    window.addEventListener('resize', this.onResize.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  onResize(event: any) {
    this.setViewportBreakpoint(event.target.innerWidth);
  }

  setViewportBreakpoint(width: number) {
    this.viewportWidth = width;
  }
}