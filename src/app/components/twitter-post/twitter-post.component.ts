import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.css'],
})
export class TwitterPostComponent implements OnInit {
  constructor(public titleService: Title) {}
  @Input()
  public baseHref = 'https://www.akshayPatil.com';

  @Input()
  public hashTags: string[] = [
    'akshayPatil',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Angular Challenge',
  ];

  public get twitterUrl() {
    const base = this.getBaseWithHashTagsAndRoute();
    const message = encodeURIComponent(
      `checkout${this.titleService.getTitle()} and become Coding GOD!!!!`
    );
    return `${base}${message}`;
  }

  ngOnInit(): void {}

  private getBaseWithHashTagsAndRoute() {
    const route = encodeURI(this.baseHref);
    const hashTags = this.hashTags.join(',');

    return `https://twitter.com/intent/tweet?hashTags=${encodeURIComponent(
      hashTags
    )}&related=pizzapokerguy&url=${route}&text=`;
  }
}
