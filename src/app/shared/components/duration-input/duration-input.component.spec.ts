import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { DurationInputComponent } from './duration-input.component';

import { DurationPipe } from '../../pipes';

describe('DurationInputComponent', () => {
  let component: DurationInputComponent;
  let fixture: ComponentFixture<DurationInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DurationInputComponent,
        DurationPipe,
      ],
      imports: [ ReactiveFormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurationInputComponent);
    component = fixture.componentInstance;
    component.writeValue(80);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check input value', () => {
    const value = fixture.nativeElement.querySelector('input').value;
    expect(value).toBe('80');
  });

  it('should check input view', () => {
    const view = fixture.nativeElement.querySelector('.duration-view');
    expect(view.textContent).toContain('1h 20min');
  });
});
