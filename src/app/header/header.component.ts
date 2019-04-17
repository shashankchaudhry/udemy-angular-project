import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onHeaderClick(event) {
    let navClicked = event.target.textContent;
    if (navClicked == 'Recipes') {
      this.navEmitter.emit('RECIPES');
    } else {
      this.navEmitter.emit('SHOPPING_LIST');
    }
  }

}
