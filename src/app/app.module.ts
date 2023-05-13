import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';
import { IntroduceComponent } from './sections/introduce/introduce.component';
import { AboutComponent } from './sections/about/about.component';
import { ResumeComponent } from './sections/resume/resume.component';
import { ServicesComponent } from './sections/services/services.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { PortfoliosComponent } from './sections/portfolios/portfolios.component';
import { TestimonialComponent } from './sections/testimonial/testimonial.component';
import { ContractComponent } from './sections/contract/contract.component';
import { IntroCardComponent } from './intro-card/intro-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import {NgOptimizedImage} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {NgImageSliderModule} from "ng-image-slider";
import { LeftDirective } from './directives/left.directive';
import { RightDirective } from './directives/right.directive';
import {MatChipsModule} from "@angular/material/chips";
import { PricingComponent } from './sections/pricing/pricing.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    IntroduceComponent,
    AboutComponent,
    ResumeComponent,
    ServicesComponent,
    SkillsComponent,
    PortfoliosComponent,
    TestimonialComponent,
    ContractComponent,
    IntroCardComponent,
    SideNavComponent,
    LeftDirective,
    RightDirective,
    PricingComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgImageSliderModule,
        NgOptimizedImage,
        MatButtonModule,
        MatChipsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
