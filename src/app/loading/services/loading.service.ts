import { Injectable } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loading: boolean = true;
  private observer: Observer<boolean>;
  private observable: Observable<boolean>;

  constructor() {
    this.observable = new Observable(this.setObserverHandler);
  }

  public show(): void {
    this.loading = true;
    this.next();
  }

  public hide(): void {
    this.loading = false;
    this.next();
  }

  public showed(): boolean {
    return this.loading;
  }

  public subscribe(
    next: (val: boolean) => void,
    error?: (err: any) => void,
    complete?: () => void,
  ): Subscription {
    return this.observable.subscribe({ next, error, complete });
  }

  private setObserverHandler = (observer: Observer<boolean>): void => {
    this.observer = observer;
  }

  private next() {
    this.observer.next(this.loading);
  }
}
