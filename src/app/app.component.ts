import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  year:  string;
  title: string;
  images: Array<any> = [];

  constructor() {
    this.title = 'Nolleperioden';
    this.year  = '2019';

    this.images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  }
}
