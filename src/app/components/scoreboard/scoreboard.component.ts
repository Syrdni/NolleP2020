import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  scores: Array<object> = [{class: 'Maskin- & Energiteknik', score: -123231}, 
                           {class: 'Datorspelsutveckling',   score: 1000},
                           {class: 'Digital design',         score: 1},
                           {class: 'Filmdesign',             score: 593},
                           {class: 'Ekonomi',                score: -2344},
                           {class: 'Nätverk',                score: 2345},
                           {class: 'Basår',                  score: 3344}];

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
      const x = a.score;
      const y = b.score;
      return ((x > y ? -1 : (x < y) ? 1 : 0));
    });
  }

}
