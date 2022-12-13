import { TestBed } from '@angular/core/testing';
import { ArcoThemeModule } from 'arco-design-angular/theme';

import { ArcoThemeService } from './arco-theme.service';

describe('ArcoThemeService', () => {
  let service: ArcoThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ArcoThemeModule]
    });
    service = TestBed.inject(ArcoThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
