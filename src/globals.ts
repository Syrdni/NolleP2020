import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  year: number = new Date().getFullYear();
}