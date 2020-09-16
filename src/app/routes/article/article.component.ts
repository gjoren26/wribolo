import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  animations: [
    trigger('channelInfo', [
      state('in', style({
        height: '250px',
      })),
      state('out', style({
        visibility: 'hidden',
        height: '20px',
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class ArticleComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  
  gjore = [
    {cols: 1, rows: 1},
    {cols: 1, rows: 1},
    {cols: 1, rows: 1},
  ]
  channelInfoPannel: string;
  show_text: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.toggleSidenav.emit();
    this.channelInfoPannel = 'in';
  }

  onChannelInfoToggle() {
    this.channelInfoPannel = this.channelInfoPannel === 'out' ? 'in' : 'out';
    if (this.channelInfoPannel === 'in') {
      setTimeout(() => {
        this.show_text = true;
      }, 300);
    } else {
      this.show_text = false;
    }
  }
  
}
