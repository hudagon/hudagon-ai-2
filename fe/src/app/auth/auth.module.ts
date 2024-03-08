import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { GoogleLoginComponent } from './components/google-login/google-login.component';
import { MainSharedModule } from '../shareds/main-shared/main-shared.module';
import { UserPanelComponent } from './components/user-panel/user-panel.component';


@NgModule({
    declarations: [
        LoginModalComponent,
        GoogleLoginComponent,
        UserPanelComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        MainSharedModule,
        GoogleSigninButtonModule
    ],
    exports: [LoginModalComponent, GoogleLoginComponent, UserPanelComponent]
})
export class AuthModule { }
