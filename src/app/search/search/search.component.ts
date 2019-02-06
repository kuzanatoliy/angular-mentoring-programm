import { Component, OnInit } from '@angular/core';

import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  styleUrls: [ './search.component.sass' ],
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  public searchValue;

  constructor(
    private searchService: SearchService,
  ) {
    this.searchValue = searchService.getValue();
  }

  public setNewValue(value): void {
    this.searchValue = value;
  }

  public searchHandler(): void {
    this.searchService.setValue(this.searchValue);
  }

  public ngOnInit(): void {
  }

}
