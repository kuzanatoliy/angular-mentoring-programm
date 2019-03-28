import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

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
      imports: [ ReactiveFormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateInputComponent);
    component = fixture.componentInstance;
    component.writeValue(currDate);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check input value', () => {
    const value = fixture.nativeElement.querySelector('input').value;
    expect(value).toBe(currDateStr);
  });
});
