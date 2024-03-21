import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-landing-page-tablet-hamburger-content',
  templateUrl: './landing-page-tablet-hamburger-content.component.html',
  styleUrls: ['./landing-page-tablet-hamburger-content.component.css']
})
export class LandingPageTabletHamburgerContentComponent implements OnInit, OnDestroy {
  @Output() notifyToggleHamburgerContent = new EventEmitter();
  user: SocialUser | undefined;
  private subscription: Subscription | undefined;

  constructor(
    private authService: AuthService,
    private socialAuthService: SocialAuthService
  ) {}

  ngOnInit(): void {
    this.subscription = this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      if (user) {
        this.authService.login(user);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  isLogged() {
    return this.authService.isLogged;
  }

  logOut() {
    this.authService.logOut();
  }

  getUserFullName() {
    return this.authService.getUserFullName();
  }

  getUserAvatar() {
    return this.authService.getUserAvatar();
  }

  googleSignIn(googleWrapper: any) {
    googleWrapper.click();
  }

  toggleHamburgerContent() {
    this.notifyToggleHamburgerContent.emit();
  }
}
