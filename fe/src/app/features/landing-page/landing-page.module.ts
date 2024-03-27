import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { TopInfoComponent } from './components/top-info/top-info.component';
import { LandingPageHeaderComponent } from './components/landing-page-header/landing-page-header.component';
import { LandingPageDesktopBodyComponent } from './components/landing-page-desktop-body/landing-page-desktop-body.component';
import { LandingPageTabletBodyComponent } from './components/landing-page-tablet-body/landing-page-tablet-body.component';
import { LandingPageMobileBodyComponent } from './components/landing-page-mobile-body/landing-page-mobile-body.component';
import { LandingPageFrameComponent } from './components/landing-page-frame/landing-page-frame.component';
import { MainSharedModule } from "../../shareds/main-shared/main-shared.module";
import { LandingPageServiceSubjectComponent } from './components/landing-page-service-subject/landing-page-service-subject.component';
import { LandingPageServiceTopicComponent } from './components/landing-page-service-topic/landing-page-service-topic.component';
import { LandingPageServiceStyleComponent } from './components/landing-page-service-style/landing-page-service-style.component';
import { LandingPageServiceColorComponent } from './components/landing-page-service-color/landing-page-service-color.component';
import { AuthModule } from "../../auth/auth.module";
import { LandingPageTabletHamburgerContentComponent } from './components/layout/landing-page-tablet-hamburger-content/landing-page-tablet-hamburger-content.component';

@NgModule({
    declarations: [
        LayoutComponent,
        TopInfoComponent,
        LandingPageHeaderComponent,
        LandingPageDesktopBodyComponent,
        LandingPageTabletBodyComponent,
        LandingPageMobileBodyComponent,
        LandingPageFrameComponent,
        LandingPageServiceSubjectComponent,
        LandingPageServiceTopicComponent,
        LandingPageServiceStyleComponent,
        LandingPageServiceColorComponent,
        LandingPageTabletHamburgerContentComponent,
    ],
    imports: [
        CommonModule,
        LandingPageRoutingModule,
        MainSharedModule,
        AuthModule
    ]
})
export class LandingPageModule { }
