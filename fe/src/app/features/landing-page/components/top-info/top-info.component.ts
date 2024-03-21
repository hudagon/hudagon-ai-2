import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MediaQueriesService } from 'src/app/core/services/media-queries.service';

@Component({
  selector: 'app-top-info',
  templateUrl: './top-info.component.html',
  styleUrls: ['./top-info.component.css']
})
export class TopInfoComponent implements OnInit {
  @Output() notifyToggleHamburger = new EventEmitter();

  constructor(
    private mediaQueriesService: MediaQueriesService
  ) {
  }

  ngOnInit(): void {
  }
  
  getViewportWidth() {
    return this.mediaQueriesService.viewportWidth;
  }

  getBreakpointValues(screen: string) {
    return this.mediaQueriesService.breakPointMap.get(screen);
  }

  handleToggleHamurber() {
    this.notifyToggleHamburger.emit();
  }
}
