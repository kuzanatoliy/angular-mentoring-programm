import { Component, OnInit } from '@angular/core';

import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.sass']
})
export class LoadingComponent implements OnInit {

  constructor(
    private loadingService: LoadingService,
  ) {
    
  }

  public ngOnInit(): void { }

}
