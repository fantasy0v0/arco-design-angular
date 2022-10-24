import { TestBed } from '@angular/core/testing';

import { ArcoThemeService } from './arco-theme.service';

describe('ArcoThemeService', () => {
  let service: ArcoThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArcoThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
