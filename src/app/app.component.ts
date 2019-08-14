import { Component } from '@angular/core';
import { Globals } from '../globals';
import * as uuid from 'uuid';
import * as moment from 'moment';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

import { Title } from "@angular/platform-browser";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent {
	title: string;
	year:  number;

	constructor(private globals: Globals, private ts: Title, private cookieService: CookieService, private http: HttpClient) {
		this.title = 'Nolleperioden';
		this.year  = globals.year;

		this.ts.setTitle(`Nollep ${this.year}`);
	}

	ngOnInit() {
		this.genUUID();
	}

	genUUID() {
		this.http.get('/assets/event.json')
    	.subscribe((res: any) => {
			let arr = res;
			let event = arr[0].event;
			let found = Object.keys(this.cookieService.getAll()).find(e => e === event);

			if(found) {
				return;
			}

			let today = moment(new Date());
			arr = res.filter(e => moment(e.date).isAfter(today));
			
			if(!arr.length) {
				return
			}

			event    = arr[0].event;
			let date = arr[0].date;
			
			date = moment(date)
						.add(1, 'day')
						.subtract(5, 'minutes')
						.format('YYYY-MM-DD HH:mm:ss');
			this.cookieService.set(event, uuid.v4(), new Date(date), '/');
		});
	}
}
