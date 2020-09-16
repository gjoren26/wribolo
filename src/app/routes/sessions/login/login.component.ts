import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SettingsService, StartupService, TokenService } from '@core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  carosulCustomOptions: OwlOptions = null;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private token: TokenService,
    private startup: StartupService,
    private settings: SettingsService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',  Validators.required]
    });
  }

  ngOnInit() {
    this.carosulCustomOptions = {
      autoplay : true,
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: true,
      navSpeed: 700,
      //enter : true,
      
      responsive: {
        0: {
          items: 4
        },
        400: {
          items: 3
        },
        768: {
          items: 3
        },
        940: {
          items: 4
        },
        1024 : {
          items: 4
        },
        1440:{
          items: 5
        },
        2560:{
          items: 6
        }
      }
    };
  

}


  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    const { token, uid, username } = { token: 'ng-matero-token', uid: 1, username: 'ng-matero' };
    // Set user info
    this.settings.setUser({
      id: uid,
      name: 'Zongbin',
      email: 'nzb329@163.com',
      avatar: '/assets/images/avatar.jpg',
    });
    // Set token info
    this.token.set({ token, uid, username });
    // Regain the initial data
    this.startup.load().then(() => {
      let url = this.token.referrer!.url || '/';
      if (url.includes('/auth')) {
        url = '/';
      }
      this.router.navigateByUrl(url);
    });
  }
}
