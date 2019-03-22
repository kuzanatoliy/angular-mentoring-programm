import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Observer, timer } from 'rxjs';
import { debounce, filter } from 'rxjs/operators';

import { SearchService } from 'src/app/services';

@Component({
  selector: 'app-search',
  styleUrls: [ './search.component.sass' ],
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  public searchControl = new FormControl('');
  
  private observer: Observer<string>;
  private charsCount: number = 0;

  constructor(
    private searchService: SearchService,
  ) {
    this.searchControl.setValue(this.searchService.value)
    new Observable(this.observerHandler)
      .pipe(filter(this.filterHandler))
      .pipe(debounce(() => timer(1000)))
      .subscribe({ next: this.searchValueHandler });
  }

  public setNewValue(value): void {
    this.searchControl.setValue(value);
  }

  public searchHandler(): void {
    this.charsCount++;
    this.observer.next(this.searchControl.value);
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
