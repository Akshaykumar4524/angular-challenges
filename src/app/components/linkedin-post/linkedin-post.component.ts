import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linkedin-post',
  templateUrl: './linkedin-post.component.html',
  styleUrls: ['./linkedin-post.component.css'],
})
export class LinkedinPostComponent implements OnInit {
  constructor(private router: Router) {}
  public get linkedInUrl() {
    const base = 'https://www.linkedin.com/shareArticle?mini=true';
    const currentSite = `&url=https://www.DylanIsrael.com${this.router.url}`;
    return `${base}${currentSite}`;
  }

  ngOnInit(): void {}
}
