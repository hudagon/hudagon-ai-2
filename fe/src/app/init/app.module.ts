import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '../core/core.module';
import { MainSharedModule } from '../shareds/main-shared/main-shared.module';
import { AuthModule } from '../auth/auth.module';
import { ToastComponent } from '../shareds/main-shared/components/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MainSharedModule,
    AuthModule,
    SocialLoginModule
  ],
  providers: [
    ToastComponent,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '250002758220-anllmnhi12nncdik3a0enj5c1v3283pq.apps.googleusercontent.com',
              {
                oneTapEnabled: false
              }
            )
          }
        ],
        onError: (err) => {
          console.error(err);
          alert("Tính năng đăng nhập đang bị lỗi, bạn hoàn toàn có thể mua hàng mà không cần đăng nhập. Xin Lỗi vì sự bất tiện này");
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
