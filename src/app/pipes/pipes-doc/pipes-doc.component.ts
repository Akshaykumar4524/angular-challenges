import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pipes-doc',
  templateUrl: './pipes-doc.component.html',
  styleUrls: ['./pipes-doc.component.css'],
})
export class PipesDocComponent implements OnInit {
  constructor() {}
  public flattenData = [1, 2, [3], [4, [5, 6, [7]]]];

  public modifyData() {
    this.flattenData.push(3, 5);
  }

  public reassignData() {
    this.flattenData = [...this.flattenData];
  }

  ngOnInit(): void {}
}
