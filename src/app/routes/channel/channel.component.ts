import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  gjore = [
    {cols: 3, rows: 1},
    {cols: 3, rows: 1},
    {cols: 3, rows: 1},
    {cols: 3, rows: 1},
    {cols: 3, rows: 1},
    {cols: 3, rows: 1},
    {cols: 3, rows: 1},
    {cols: 3, rows: 1},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
