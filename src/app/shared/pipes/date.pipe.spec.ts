import { DatePipe } from './date.pipe';

describe('DatePipe', () => {
  let pipe: DatePipe;

  beforeEach(() => {
    pipe = new DatePipe();
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
