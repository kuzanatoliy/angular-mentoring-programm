import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-loading',
  styleUrls: [ './loading.component.sass' ],
  templateUrl: './loading.component.html',
})
export class LoadingComponent implements OnInit {
  public isShow: boolean;

  private subscription: Subscription;

  constructor(
    private loadingService: LoadingService,
  ) {
    this.subscription = this.loadingService.subscribe(this.changeShowHandler);
  }

  public ngOnInit(): void { }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private changeShowHandler = (value: boolean): void => {
    this.isShow = value;
  }
}
