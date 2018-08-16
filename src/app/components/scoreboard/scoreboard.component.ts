import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  scores: Array<object> = [];

  constructor(private http: Http) {  }

  ngOnInit() {
    this.http.get('assets/score.json')
    .subscribe(res => {
      // console.log(res.json());
      this.scores = this.sortByKeys(res.json());
    }, error => console.log('Failed to load values!', error));
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
