import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.less']
})
export class CrudComponent implements OnInit {

  sponsImgs:     Array<string> = [];
  coWorkersImgs: Array<string> = [];

  constructor() { 
    let pathSpons     = 'assets/sponsors/';
    let pathCoWorkers = 'assets/coworkers/';

    this.sponsImgs     = [`${pathSpons}/abf.png`, `${pathSpons}/sammes.png`, `${pathSpons}/skebo.png`];
    this.coWorkersImgs = [`${pathCoWorkers}/campus.png`, `${pathCoWorkers}/ltu.png`, `${pathCoWorkers}/tkl.png`, ];

    // console.log(this);
  }

  ngOnInit() {
  }

}
