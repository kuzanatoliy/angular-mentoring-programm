import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DateInputComponent } from './date-input.component';

import { DatePipe } from '../../pipes';

describe('DateInputComponent', () => {
  let component: DateInputComponent;
  let fixture: ComponentFixture<DateInputComponent>;

  const currDate: Date = new Date();
  const currDateStr: string = (new DatePipe()).transform(currDate);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateInputComponent ],
      imports: [ FormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateInputComponent);
    component = fixture.componentInstance;
    component.date = currDate;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check input value', () => {
    const value = fixture.nativeElement.querySelector('input').getAttribute('ng-reflect-model');
    expect(value).toBe(currDateStr);
  });

  describe('should check callback functionality', () => {
    let date: Date;

    const callback: (val: Date) => void = (val) => {
      date = val;
    };

    it('should check function result', () => {
      component.dateChangeHandler = callback;
      fixture.detectChanges();
      component.changeHandler();
      expect(date).not.toEqual(currDate);
      expect(date).toEqual(new Date(new DatePipe().transform(currDate)));
    });
  });
});
