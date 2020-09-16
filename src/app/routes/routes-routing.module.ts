import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';

import { AdminLayoutComponent } from '../theme/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from '../theme/auth-layout/auth-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './sessions/login/login.component';
import { RegisterComponent } from './sessions/register/register.component';
import { AuthGuard } from '@core';
import { HomeComponent } from './home/home.component';
import { ChannelComponent } from './channel/channel.component';
import { ArticleComponent } from './article/article.component';
import { AccountPageComponent } from './account-page/account-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'article', pathMatch: 'full' },
      {
        path: 'article',
        component: HomeComponent,
        data: { title: 'article', titleI18n: 'article' },
      },
      {
        path: 'p',
        component: ChannelComponent,
        data: { title: 'p', titleI18n: 'p' },
      },
      {
        path: 'a',
        component: ArticleComponent,
        data: { title: 'a', titleI18n: 'a' },
      },
      {
        path: 'account',
        component: AccountPageComponent,
        data: { title: 'account', titleI18n: 'account' },
      },
      
      {
        path: 'sessions',
        loadChildren: () => import('./sessions/sessions.module').then(m => m.SessionsModule),
        data: { title: 'Sessions', titleI18n: 'sessions' },
      }
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent, data: { title: 'Login', titleI18n: 'login' } },
      {
        path: 'register',
        component: RegisterComponent,
        data: { title: 'Register', titleI18n: 'register' },
      },
    ],
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
