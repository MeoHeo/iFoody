import { AfterViewInit, ElementRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-rating',
  templateUrl: './bs-rating.component.html',
  styleUrls: ['./bs-rating.component.scss']
})
export class BsRatingComponent  {
  currentRate: number;
  max = 5;
  isGood: boolean; // for rating which greater than 4.5
  isFair: boolean; // "fair" for rating which greater than 4.0
  isMedium: boolean; // "medium" for rating which equal to or greater than 3.5
  isBad: boolean; // "bad" for rating which less than 3.5
  
  constructor (private elementRef: ElementRef) {
    this.currentRate = 3.4;

    this.isGood = false;
    this.isFair = false;
    this.isMedium = false;
    this.isBad = false;

    this.getStatus();
  }

  // modify variable for setting color to rating
  private getStatus() {
    if (this.currentRate >= 4.5) {this.isGood = true;}
    else if (this.currentRate >= 4.0) {this.isFair = true;}
    else if (this.currentRate >= 3.5) {this.isMedium = true;}  
    else  {this.isBad = true;}
  }
}
