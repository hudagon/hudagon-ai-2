import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';
import { BrowserStorageService } from 'src/app/core/services/browser-storage.service';
import { ToastService } from 'src/app/shareds/main-shared/services/toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged: boolean = false;
  userFullName: string = '';
  userAvatar: string = '';
  userSocialType: string = '';
  userIdentificationString: string = '';

  constructor(
    private browserStorageService: BrowserStorageService,
    private socialAuthService: SocialAuthService,
    private toastService: ToastService
  ) {
  }

  login(user: any) {
    this.toastService.showToast("success", "Đăng nhập thành công", "Xin chào " + user.name);
    this.userFullName = user.name;
    this.userAvatar = user.photoUrl;
    this.userSocialType = user.PROVIDER;

    switch(user.PROVIDER) {
      case "GOOGLE": {
        this.userIdentificationString = user.email;
      }
    }

    this.browserStorageService.updateLoginToken(user);
    this.isLogged = true;
  }

  logOut() {
    this.socialAuthService.signOut();
    this.resetUserInfo();
    this.browserStorageService.removeLoginToken();
    this.isLogged = false;
  }

  getUserFullName() {
    return this.userFullName;
  }

  getUserAvatar() {
    return this.userAvatar;
  }

  resetUserInfo() {
    this.userFullName = '';
    this.userAvatar = '';
    this.userSocialType = '';
    this.userIdentificationString = '';
  }
}
