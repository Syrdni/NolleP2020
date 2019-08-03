import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../../api.service';
import { Headers } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.less']
})
export class VoteComponent implements OnInit {

	options: Array<string>;
	url: string;
	headers: HttpHeaders;

	constructor(public http: HttpClient, private apiService: ApiService, private cookieService: CookieService) { 
		this.options = [];
		// this.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
	}

	ngOnInit() {
		this.apiService.read().subscribe((res: any[])=> {
			console.log(res);
		}, (e: any) => console.log("Error " + e));
	}
	
	vote(vote: any) {
		this.http.get('/assets/event.json')
    	.subscribe((res: any) => {
			let event = res[0].event;
			let uuid = this.cookieService.get(event);

			let obj = {
				vote: vote,
				event: event,
				uuid: uuid
			};

			this.apiService.create(obj).subscribe((res: any)=>{
				console.log("Entry created, ", res);
			});
		})

	}
}
