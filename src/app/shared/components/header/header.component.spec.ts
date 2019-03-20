import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { HeaderComponent } from './header.component';

import { LogoComponent } from '../logo/logo.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const initialState = {
    userInfo: {
      user: {
        userName: 'Pup',
        firstName: 'Pupoc',
        lastName: 'Pupcovic',
      },
      loading: false,
      error: false,
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        LogoComponent,
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [ provideMockStore({ initialState }) ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find logo component', () => {
    const coursesComponent = fixture.nativeElement.querySelector('app-logo');
    expect(coursesComponent).not.toBeNull();
  });

  it('should find login button', () => {
    component.userName = null;
    fixture.detectChanges();
    const loginButton = fixture.nativeElement.querySelector('.header-login-button');
    expect(loginButton).not.toBeNull();
  });

  
  it('should find logout button', () => {
    const logoutButton = fixture.nativeElement.querySelector('.header-logout-button');
    expect(logoutButton).not.toBeNull();
  });
});
