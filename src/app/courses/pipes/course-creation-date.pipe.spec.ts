import { CourseCreationDatePipe } from './course-creation-date.pipe';

describe('CourseCreationDatePipe', () => {
  let pipe: CourseCreationDatePipe;

  beforeEach(() => {
    pipe = new CourseCreationDatePipe();
  });
  
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should check creation date format', () => {
    expect(pipe.transform(new Date("5.5.2014"))).toBe("05.05.2014");
  });

  it('should check creation date format with default format', () => {
    const date = new Date("5.5.2014");
    expect(pipe.transform(date)).not.toBe(date.toString());
  });
});
