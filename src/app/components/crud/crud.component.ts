import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.less']
})
export class CrudComponent implements OnInit {

  sponsImgs: Array<string> = [];

  constructor() { 
    this.sponsImgs = ['assets/sponsors/nordskenlogo.png'];

    // console.log(this);
  }

  ngOnInit() {
  }

}
