import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [ FormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check input working', () => {
    const value = 'Some value';
    const inputComponent = fixture.nativeElement.querySelector('input');
    expect(inputComponent).not.toBeNull();
    inputComponent.value = value;
    inputComponent.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.value).toEqual(value);
  });
});
