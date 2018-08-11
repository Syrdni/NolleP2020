import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  images: Array<string> = ['./../../../assets/nordskenlogo.png'];

  constructor() { }

  ngOnInit() {
  }

}
