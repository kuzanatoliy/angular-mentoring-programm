import { Component, OnInit } from '@angular/core';
import { Observable, Observer, timer } from 'rxjs';
import { debounce, filter } from 'rxjs/operators';

import { SearchService } from 'src/app/services';

@Component({
  selector: 'app-search',
  styleUrls: [ './search.component.sass' ],
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  private searchValue: string;
  private observer: Observer<string>;
  private charsCount: number = 0;

  public get value() {
    return this.searchValue;
  }

  public set value(value) {
    this.searchValue = value;
  }

  constructor(
    private searchService: SearchService,
  ) {
    this.searchValue = this.searchService.value;
    new Observable(this.observerHandler)
      .pipe(filter(this.filterHandler))
      .pipe(debounce(() => timer(1000)))
      .subscribe({ next: this.searchValueHandler });
  }

  public setNewValue(value): void {
    this.searchValue = value;
  }

  public searchHandler(): void {
    this.charsCount++;
    this.observer.next(this.searchValue);
  }

  public ngOnInit(): void { }

  private observerHandler = (observer: Observer<string>): void => {
    this.observer = observer;
  }

  private searchValueHandler = (value: string): void => {
    this.charsCount = 0;
    this.searchService.value = value;
  }

  private filterHandler = (): boolean => {
    return this.charsCount < 3 ? false : true;
  }
}
