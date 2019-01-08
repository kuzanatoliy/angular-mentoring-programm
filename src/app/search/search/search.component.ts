import { Component, OnInit } from '@angular/core';

import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  public searchValue;

  constructor(private searchService: SearchService ) {
    this.searchValue = searchService.getValue();
  }

  setNewValue(value) {
    this.searchValue = value;
  }

  searchHandler() {
    this.searchService.setValue(this.searchValue);
  }

  ngOnInit() {
  }

}
