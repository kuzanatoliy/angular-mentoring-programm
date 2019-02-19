import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private observer: Observer<boolean>;
  private observable: Observable<boolean>;

  constructor() {
    this.observable = new Observable(this.setObserverHandler);
  }

  public show(): void {
    this.observer.next(true);
  }

  public hide(): void {
    this.observer.next(false);
  }

  public subscribe(next: (val: boolean) => void, error?: (err: any) => void, complete?: () => void) {
    this.observable.subscribe({ next, error, complete });
  }

  private setObserverHandler = (observer: Observer<boolean>): void => {
    this.observer = observer;
  }
}
