import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-rating',
  templateUrl: './start-rating.component.html',
  styleUrls: ['./start-rating.component.css'],
})
export class StartRatingComponent implements OnInit {
  constructor() {}
  @Input()
  public star = 5;
  private highestRating = 5;
  ngOnInit(): void {
    if (this.star > this.highestRating) {
      this.star = this.highestRating;
    }
  }

  public get fullStars(): number[] {
    const totalFullStars = Math.floor(this.star);
    return Array(totalFullStars).fill(0);
  }

  public get hasHalfStars(): boolean {
    const hasHalfStar =
      this.star - Math.floor(this.star) >= 0.5 &&
      this.star !== this.highestRating;

    return hasHalfStar;
  }

  public get emptyStars(): number[] {
    const totalEmptyStars = Math.round(this.highestRating - this.star);

    return Array(totalEmptyStars).fill(0);
  }
}
