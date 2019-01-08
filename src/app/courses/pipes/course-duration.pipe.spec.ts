import { CourseDurationPipe } from './course-duration.pipe';

describe('CourseDurationPipe', () => {
  let pipe: CourseDurationPipe;

  beforeEach(() => {
    pipe = new CourseDurationPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should check duration with hours', () => {
    expect(pipe.transform(500)).toBe('8h 20min');
  });

  it('should check duration without hours', () => {
    expect(pipe.transform(40)).toBe('40min');
  });

  it('should check duration with default value', () => {
    expect(pipe.transform(40)).not.toBe('40');
  });
});
