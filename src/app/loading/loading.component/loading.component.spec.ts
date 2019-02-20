import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingComponent } from './loading.component';

import { LoadingService } from '../services/loading.service';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let service: LoadingService;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingComponent ],
      providers: [ LoadingService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
    service = TestBed.get(LoadingService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check hide view', () => {
    service.hide();
    fixture.detectChanges();
    const loadingComponent = fixture.nativeElement.querySelector('img');
    expect(loadingComponent).toBeNull();
  });

  it('should check show view', () => {
    service.show();
    fixture.detectChanges();
    const loadingComponent = fixture.nativeElement.querySelector('img');
    expect(loadingComponent).not.toBeNull();
  });
});
