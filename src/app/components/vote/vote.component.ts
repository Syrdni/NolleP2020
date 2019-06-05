import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.less']
})
export class VoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  vote(vote: string) {
    console.log(vote)
  }
}
