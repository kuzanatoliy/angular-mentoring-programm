import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserControlComponent } from '../user-control/user-control.component';
import { AuthorListControlComponent } from './author-list-control.component';

describe('AuthorListControlComponent', () => {
  let component: AuthorListControlComponent;
  let fixture: ComponentFixture<AuthorListControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AuthorListControlComponent,
        UserControlComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorListControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
