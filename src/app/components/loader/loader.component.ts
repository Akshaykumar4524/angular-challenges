import { Component, Input, OnInit } from '@angular/core';
import { LoaderType } from './models/loader-type';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit {
  constructor() {}
  @Input()
  public isLoading = false;
  @Input()
  public loaderType: LoaderType = LoaderType.Circular;

  public LoaderType = LoaderType;

  public get loadingText() {
    return `${this.loading}${this.loadingPeriods}`;
  }

  private loading = 'Loading';
  private loadingPeriods = '.\0\0';

  ngOnInit(): void {
    if (this.loaderType == LoaderType.Loading) {
      this.updateLoaderPeriods();
    }
    setInterval(() => {
      this.isLoading = false;
    }, 3000);
  }

  private updateLoaderPeriods() {
    let currstep = 0;

    setInterval(() => {
      switch (currstep % 3) {
        case 0:
          this.loadingPeriods = '..\0';
          currstep++;
          break;
        case 1:
          this.loadingPeriods = '...';
          currstep++;
          break;
        case 2:
          this.loadingPeriods = '.\0\0';
          currstep = 0;
          break;
      }
    }, 500);
  }
}
