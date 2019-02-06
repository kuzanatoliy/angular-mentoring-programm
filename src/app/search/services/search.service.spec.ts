import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() => {
    service = new SearchService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check service functionality', () => {
    const value = 'Search value';
    service.setValue(value);
    const serviceValue = service.getValue();
    expect(value).toBe(serviceValue);
  });
});
