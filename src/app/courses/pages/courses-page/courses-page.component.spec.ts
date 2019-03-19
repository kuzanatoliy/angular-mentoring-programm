import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthModule } from 'src/app/auth/auth.module';
import { ErrorsModule } from 'src/app/errors/errors.module';
import { SearchModule } from 'src/app/search/search.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { CourseCreatePageComponent } from '../course-create-page/course-create-page.component';
import { CourseUpdatePageComponent } from '../course-update-page/course-update-page.component';
import { CoursesPageComponent } from './courses-page.component';

import {
  CourseFormComponent,
  CourseItemComponent,
  CoursesComponent,
} from '../../components';

import { FreshCourseDirective } from '../../directives/fresh-course.directive';

import { OrderByCreationDatePipe } from '../../pipes';

import { LoadingService } from 'src/app/services/loading.service';

class MockLoadingService {

  constructor() { }

  public show(): void { }

  public hide(): void { }

}

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesPageComponent,
        CourseCreatePageComponent,
        CourseUpdatePageComponent,
        CourseFormComponent,
        CourseItemComponent,
        CoursesComponent,
        FreshCourseDirective,
        OrderByCreationDatePipe,
      ],
      imports: [
        AuthModule,
        ErrorsModule,
        SearchModule,
        SharedModule,
        FontAwesomeModule,
        FormsModule,
        HttpClientTestingModule,
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
        { provide: LoadingService, useClass: MockLoadingService },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find app-breadcrumbs component', () => {
    const breadcrupmbsComponent = fixture.nativeElement.querySelector('app-breadcrumbs');
    expect(breadcrupmbsComponent).not.toBeNull();
  });

  it('should find app-search component', () => {
    const searchComponent = fixture.nativeElement.querySelector('app-search');
    expect(searchComponent).not.toBeNull();
  });

  it('should find app-breadcrumbs component', () => {
    const coursesComponent = fixture.nativeElement.querySelector('app-courses');
    expect(coursesComponent).not.toBeNull();
  });
});
