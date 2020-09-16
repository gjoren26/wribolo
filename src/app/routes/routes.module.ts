import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RoutesRoutingModule } from './routes-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './sessions/login/login.component';
import { RegisterComponent } from './sessions/register/register.component';
import { HomeComponent } from './home/home.component';
import { HomeFirstPartComponent } from './home/home-first-part/home-first-part.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeGridCardComponent } from './home/home-grid-card/home-grid-card.component';
import { HomeSliderCardComponent } from './home/home-slider-card/home-slider-card.component';
import { ChannelComponent } from './channel/channel.component';
import { ArticleComponent } from './article/article.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AccountPageComponent } from './account-page/account-page.component';

const COMPONENTS = [DashboardComponent, LoginComponent, RegisterComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [SharedModule, RoutesRoutingModule, CarouselModule, SlickCarouselModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, HomeComponent, HomeFirstPartComponent, HomeGridCardComponent, HomeSliderCardComponent, ChannelComponent, ArticleComponent, AccountPageComponent],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class RoutesModule {}
