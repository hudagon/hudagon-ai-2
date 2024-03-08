import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  @Output() notifyToggleLoginModal = new EventEmitter();
  @Input() z_index: string = '0';
  user: SocialUser | undefined;

  constructor(
    private authService: AuthService,
    private socialAuthService: SocialAuthService
  ) {}

  ngOnInit(): void {
    if (this.z_index) {
      const wrapper = document.getElementById('wrapper');
      if (wrapper) {
        wrapper.style.zIndex = this.z_index;
      }
    }

    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      if (user) {
        this.authService.login(user);
        this.handleToggleModal();
      }
    });
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
