import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-more',
  styleUrls: [ './load-more.component.sass' ],
  templateUrl: './load-more.component.html',
})
export class LoadMoreComponent implements OnInit {

  constructor() { }

  public ngOnInit() {}

  public loadHandler(): void {
    console.log('loadHandler');
  }

}
