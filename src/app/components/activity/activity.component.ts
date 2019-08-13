import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.less']
})
export class ActivityComponent implements OnInit {

	img: string;

	constructor() {
	}

	ngOnInit() {
		this.loadImage()
	}

	loadImage() {
		let date = moment(new Date()).format('YYYYMMDD');
		this.img = `assets/activity/${date}.png`;
	}

}
