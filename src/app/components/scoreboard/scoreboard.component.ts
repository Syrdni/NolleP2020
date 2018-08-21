import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  scores: Array<object> = [];
  classImg: string = ''
  showScore: boolean = false;

  token: string = 'EAAGZBxkLdw7MBAJWfDIdpQpql7rV5QnyhFiFX0qynlzGZBuAu02XxDsywLcZAymnghhQHcsIx2S5kJAY3ZCgdSzD8MHBTllksSiDqwu7i4ZAPikSOZBCadxLGPfyYnU2oNZA3D5uEi4ZBC6kY6LM9PPlSfI8vFPmEnG0i68zX5r4iQp7wjvr0cdc7xE9tdB8BoQyyLhj0ukovQZDZD';
  pageId: string = '543660139400375';

  constructor(private http: Http) {  }

  ngOnInit() {
    this.http.get('/assets/score.json')
    .subscribe(res => {
      // console.log(res.json());

      if(res.json()[0]['class'] === 'Överphösarna') {
        this.scores = res.json().filter(e => e.class === 'Överphösarna');
        return;
      }

      this.showScore = !this.showScore;

      this.scores = this.sortByKeys(res.json());
      if(this.scores[0].hasOwnProperty('class')) {

        let foundSpace = this.scores[0]['class'].indexOf(' ');
        if(foundSpace !== -1) {
          this.classImg = `/assets/Patches/Irl/${this.scores[0]['class'].replace(' ','_')}.png`;
          return;
        }

        this.classImg = `/assets/Patches/Irl/${this.scores[0]['class']}.png`;
      }
    }, error => console.log('Failed to load values!', error));

    //491233711342515|QTaovk3hs1mjSdEYFuHGCOeax3s
    // this.http.get(`https://graph.facebook.com/${this.pageId}/posts?access_token=${this.token}`)
    // .subscribe(res => {
    //   console.log(res.json());
    // }, error => console.log('Blob!', error));
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
