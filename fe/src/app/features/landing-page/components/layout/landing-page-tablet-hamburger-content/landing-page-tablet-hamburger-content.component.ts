import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-landing-page-tablet-hamburger-content',
  templateUrl: './landing-page-tablet-hamburger-content.component.html',
  styleUrls: ['./landing-page-tablet-hamburger-content.component.css']
})
export class LandingPageTabletHamburgerContentComponent implements OnInit {
  @Output() notifyToggleHamburgerContent = new EventEmitter();
  user: SocialUser | undefined;

  constructor(
    private authService: AuthService,
    private socialAuthService: SocialAuthService
  ) {}

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      if (user) {
        this.authService.login(user);
      }
    });
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
