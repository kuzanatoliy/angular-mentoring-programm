import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFreshCourse]',
})
export class FreshCourseDirective {
  @Input() public appFreshCourse: Date;

  private TIME: number = 14;

  private nativeElem;

  constructor(
    private elem: ElementRef,
  ) {
    this.nativeElem = elem.nativeElement;
  }

  public ngOnInit() {
    const date: Date = this.appFreshCourse;
    const end: Date = new Date();
    const start: Date = new Date();
    start.setDate(end.getDate() - this.TIME);
    if (start < date && end >= date) {
      this.nativeElem.classList.add('new');
    } else if (date > end) {
      this.nativeElem.classList.add('released');
    }
  }

}
