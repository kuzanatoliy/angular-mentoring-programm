import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';

import { LogoComponent } from '../logo/logo.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

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
    const loginButton = fixture.nativeElement.querySelector('.header-login-button');
    expect(loginButton).not.toBeNull();
  });

  it('should find logout button', () => {
    component.userName = 'User';
    fixture.detectChanges();
    const logoutButton = fixture.nativeElement.querySelector('.header-logout-button');
    expect(logoutButton).not.toBeNull();
  });
});
