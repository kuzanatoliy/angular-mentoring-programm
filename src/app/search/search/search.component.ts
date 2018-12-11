import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  public searchValue;

  constructor() {
    this.searchValue = '';
  }

  setNewValue(value) {
    this.searchValue = value;
  }

  searchHandler() {
    console.log(this.searchValue);
  }

  ngOnInit() {
  }

}