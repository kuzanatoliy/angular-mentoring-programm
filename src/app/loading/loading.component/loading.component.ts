import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoadingService } from 'src/app/services/loading.service';

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
    this.isShow = this.loadingService.showed();
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
