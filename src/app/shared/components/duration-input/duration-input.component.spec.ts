import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

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
      imports: [ FormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurationInputComponent);
    component = fixture.componentInstance;
    component.duration = 80;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check input value', () => {
    const value = fixture.nativeElement.querySelector('input').getAttribute('ng-reflect-model');
    expect(value).toBe('80');
  });

  it('should check input view', () => {
    const view = fixture.nativeElement.querySelector('.duration-view');
    expect(view.textContent).toContain('1h 20min');
  });

  describe('should check callback functionality', () => {
    let duration: number = 10;

    const callback: (val: number) => void = (val) => {
      duration = val;
    };

    it('should check function result', async () => {
      component.durationChangeHandler = callback;
      fixture.detectChanges();
      component.changeHandler();
      expect(duration).toBe(80);
    });
  });
});
