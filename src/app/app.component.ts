import { Component } from '@angular/core';
import { Globals } from '../globals';

import { Title } from "@angular/platform-browser";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent {
	title: string;
	year:  number;

	constructor(private globals: Globals, private ts: Title) {
		this.title = 'Nolleperioden';
		this.year  = globals.year;

		this.ts.setTitle(`Nolle-p ${this.year}`);
	}
}
