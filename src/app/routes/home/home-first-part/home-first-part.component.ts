import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-first-part',
  templateUrl: './home-first-part.component.html',
  styleUrls: ['./home-first-part.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeFirstPartComponent implements OnInit {
  carosulCustomOptions: OwlOptions = null;
  gjore = [
    {cols: 6, rows: 1},
    {cols: 2, rows: 1},
    {cols: 4, rows: 1},
    {cols: 4, rows: 1},
    {cols: 2, rows: 1},
    {cols: 2, rows: 1},
    {cols: 4, rows: 1},
  ]
  constructor() { }

  ngOnInit(): void {
    this.carosulCustomOptions = {
      autoplay : false,
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: false,
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
      },
      nav: true,
	    navText:["<img class='nav-icon' src='../../../../assets/icons/keyboard_arrow_left-24px.svg'>","<img class='nav-icon' src='../../../../assets/icons/keyboard_arrow_right-24px.svg'>"],
    };
  

}
}