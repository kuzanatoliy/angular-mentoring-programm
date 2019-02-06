import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  let pipe: DurationPipe;

  beforeEach(() => {
    pipe = new DurationPipe();
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
