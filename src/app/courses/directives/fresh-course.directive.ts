import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFreshCourse]'
})
export class FreshCourseDirective {
  private TIME: number = 14;
  
  private nativeElem;

  @Input() appFreshCourse: Date;

  constructor(private elem: ElementRef) {
    this.nativeElem = elem.nativeElement;
  }

  ngOnInit() {
    const date = this.appFreshCourse;
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - this.TIME);
    if(start < date && end >= date) {
      this.nativeElem.classList.add('new');
    }
  }

}
