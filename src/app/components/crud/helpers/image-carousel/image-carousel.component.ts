import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.less']
})
export class ImageCarouselComponent implements OnInit {
	images: Array<any> = [];
	constructor() { 
		this.images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
	}

	ngOnInit() {
	}

}
