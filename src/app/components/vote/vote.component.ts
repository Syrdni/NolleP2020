import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.less']
})
export class VoteComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit() {
	this.http.get<any>('https://strawpoll.me/api/v2/polls/18285079').subscribe(e => {
		console.log(e);
	  });
  }

  vote(vote: string) {
	// let headers = new Headers({ 'Content-Type': 'application/json' });
    // let data    = new RequestOptions({ headers : headers });
	// this.http.post('https://strawpoll.me/api/v2/polls/18285079',headers, data);
  }
}
