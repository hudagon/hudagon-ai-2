import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MediaQueriesService } from 'src/app/core/services/media-queries.service';

@Component({
  selector: 'app-landing-page-header',
  templateUrl: './landing-page-header.component.html',
  styleUrls: ['./landing-page-header.component.css']
})
export class LandingPageHeaderComponent {
  @Output() notifyToggleLoginModal: EventEmitter<string> = new EventEmitter();

  constructor(
    private authService: AuthService,
    private mediaQueriesService: MediaQueriesService
  ) {}

  toggleLoginModal() {
    this.notifyToggleLoginModal.emit();
  }

  isLogged() {
    return this.authService.isLogged;
  }

  getViewportWidth() {
    return this.mediaQueriesService.viewportWidth;
  }

  getBreakpointValues(screen: string) {
    return this.mediaQueriesService.breakPointMap.get(screen);
  }
}
