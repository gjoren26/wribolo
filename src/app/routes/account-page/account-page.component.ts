import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountPageComponent implements OnInit {
active_navigation_text: string = 'my-wribolo';
  constructor() { }

  ngOnInit(): void {
  }
  navigationAccount(navigation_name: string){
    switch(navigation_name) {
      case 'my-wribolo': 
      this.active_navigation_text=navigation_name;
      case 'bookmarks': 
      this.active_navigation_text=navigation_name;
      case 'notifications': 
      this.active_navigation_text=navigation_name;
      case 'account': 
      this.active_navigation_text=navigation_name;
      case 'settings':
      this.active_navigation_text=navigation_name;  
    }
   }
 }


  

