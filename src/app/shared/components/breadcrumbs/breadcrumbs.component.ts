import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  styleUrls: [ './breadcrumbs.component.sass' ],
  templateUrl: './breadcrumbs.component.html',
})
export class BreadcrumbsComponent implements OnInit {

  public get parentTitle() {
    return this.parTitle;
  }

  public get currentTitle() {
    return this.title || this.curTitle;
  }

  public get parentUrl() {
    return '/' + this.parUrl;
  }

  @Input() public title: string;
  private parTitle: string;
  private parUrl: string;
  private curTitle: string;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    const { data, parent } = this.activatedRoute;
    parent && parent.data.subscribe((item) => this.parTitle = item.title);
    data && data.subscribe((item) => this.curTitle = item.title);
    parent && parent.url.subscribe((item) => this.parUrl = item[0].path);
  }

  public isShowSecondLevel() {
    return this.currentTitle !== this.parentTitle;
  }

}
