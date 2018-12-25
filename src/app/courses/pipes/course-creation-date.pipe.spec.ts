import { CourseCreationDatePipe } from './course-creation-date.pipe';

describe('CourseCreationDatePipe', () => {
  it('create an instance', () => {
    const pipe = new CourseCreationDatePipe();
    expect(pipe).toBeTruthy();
  });
});
