import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  gjore = [
{cols: 2, rows: 1},
{cols: 2, rows: 1},
{cols: 4, rows: 1},
{cols: 2, rows: 1},
{cols: 5, rows: 1},
{cols: 5, rows: 1},
{cols: 5, rows: 1},
{cols: 2, rows: 1},
{cols: 3, rows: 1},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

class tabs {
  name: string;
}