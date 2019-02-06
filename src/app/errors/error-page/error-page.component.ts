import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  styleUrls: [ './error-page.component.sass' ],
  templateUrl: './error-page.component.html',
})
export class ErrorPageComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}

  public ngOnInit(): void { }

  public clickHandler(): void {
    this.router.navigate(['']);
  }

}
