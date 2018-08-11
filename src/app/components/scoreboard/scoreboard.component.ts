import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  scores: Array<object> = [{place: 3, class: 'Maskin & Energi', score: 123231}, 
                           {place: 1, class: 'Dator',           score: -1000},
                           {place: 2, class: 'Digisign',        score: 1},
                           {place: 7, class: 'Attribut',        score: 593},
                           {place: 6, class: 'Ekonomi',         score: 2344},
                           {place: 5, class: 'Nätverk',         score: 2344},
                           {place: 4, class: 'Basår',           score: 2344}];

  constructor() { }

  ngOnInit() {
    this.scores = this.sortByKeys(this.scores);
  }

  loadValues() {
    console.log("Load Values was pressed!");

    /// Load values from csv file

    /// Split values by (,) and objects by (;)

    /// Sort by place

    /// store sorted array

    /// 
  }

  /// Easy enough so insertion sort can be used
  sortByKeys(values) {
    return values.sort((a, b) => {
      const x = a.place;
      const y = b.place;
      return ((x < y ? -1 : (x > y) ? 1 : 0));
    });
  }

}
