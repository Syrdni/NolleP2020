import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.less']
})
export class MobileMenuComponent implements OnInit {
  isExpanded: boolean;
  
  constructor() { 
    this.isExpanded = false;
  }

  ngOnInit() {
  }

}
