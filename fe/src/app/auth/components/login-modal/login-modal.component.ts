import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit, OnDestroy {
  @Output() notifyToggleLoginModal = new EventEmitter();
  @Input() z_index: string = '0';
  myUser: SocialUser | undefined;
  private subscription: Subscription | undefined;

  constructor(
    private authService: AuthService,
    private socialAuthService: SocialAuthService,
  ) {}

  ngOnInit(): void {
    if (this.z_index) {
      const wrapper = document.getElementById('wrapper');
      if (wrapper) {
        wrapper.style.zIndex = this.z_index;
      }
    }

    this.subscription = this.socialAuthService.authState.subscribe((user) => {
      this.myUser = user;
      if (this.myUser) {
        this.authService.login(this.myUser);
        this.handleToggleModal();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  handleToggleModal() {
    this.notifyToggleLoginModal.emit();
  }

  afterSuccessLogin() {
    this.handleToggleModal();
  }

  googleSignIn(googleWrapper: any) {
    googleWrapper.click();
  }
}
