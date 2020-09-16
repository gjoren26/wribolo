import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as screenfull from 'screenfull';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Input() showToggle = true;
  @Input() showBranding = false;
  closedSearchBar=false;
  momental_route: any;
  active_navigation_text: string= 'article';
  toggle_icon:boolean = true;

  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleSidenavNotice = new EventEmitter<void>();

  private get screenfull(): screenfull.Screenfull {
    return screenfull as screenfull.Screenfull;
  }

  constructor(
    private route: ActivatedRoute,
    private router:Router,
  ) {}

  ngOnInit() {
    this.momental_route = this.route.snapshot;
    console.log("ROUTE", this.momental_route._routerState.url)
    this.toggle_icon = this.momental_route._routerState.url == '/article' ? true : false;
    console.log("ICON>>", this.toggle_icon)
    console.log("ASlfkjgjd", this.router)
    if(this.momental_route._routerState.url == '/article'){
      this.active_navigation_text= 'article'
    }
    if(this.momental_route._routerState.url == '/account'){
      this.active_navigation_text= 'for-me'
    }
  }


  tef(){
    this.toggleSidenav.emit();
  }
  openSearchBar(){
    this.closedSearchBar=true;
  }

  closeSearchBar(){
    this.closedSearchBar=false;
  }

  navigation(navigation_name: string){
   switch(navigation_name) {
     case 'article': 
     this.active_navigation_text=navigation_name;
     this.router.navigateByUrl('/article');
     break;
     case 'videos': 
     this.active_navigation_text=navigation_name;
     break;
     case 'gallery': 
     this.active_navigation_text=navigation_name;
     break;
     case 'for-me': 
     this.router.navigateByUrl('/account');
     this.active_navigation_text=navigation_name;
     break;
   }
  }
}
