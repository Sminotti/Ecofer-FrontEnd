import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'FrontEnd';
  opened = false;

  constructor() {}

  sideBarToggler() {
    this.opened = !this.opened;
  }
  ngOnInit() {}
}
