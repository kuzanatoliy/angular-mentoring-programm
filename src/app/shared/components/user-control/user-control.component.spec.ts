import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserControlComponent } from './user-control.component';

import { IUser } from '../../../interfaces/IUser';

describe('UserControlComponent', () => {
  let component: UserControlComponent;
  let fixture: ComponentFixture<UserControlComponent>;

  const USER_MOCK_DATA: IUser = {
    firstName: 'Igar',
    id: '1',
    lastName: 'Pupkin',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserControlComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should check empty user content', () => {
    it('first name tag should not founded', () => {
      const firstNameElem = fixture.nativeElement.querySelector('.user-control-first-name');
      expect(firstNameElem).toBeNull();
    });

    it('last name tag should not founded', () => {
      const lastNameElem = fixture.nativeElement.querySelector('.user-control-last-name');
      expect(lastNameElem).toBeNull();
    });
  });

  describe('should check user content', () => {
    beforeEach(async () => {
      component.user = USER_MOCK_DATA;
      fixture.detectChanges();
    });

    it('first name tag should founded and contin user firstName', () => {
      const firstNameElem = fixture.nativeElement.querySelector('.user-control-first-name');
      expect(firstNameElem).not.toBeNull();
    });

    it('first name tag should founded and contin user lastName', () => {
      const lastNameElem = fixture.nativeElement.querySelector('.user-control-last-name');
      expect(lastNameElem).not.toBeNull();
    });
  });
});
