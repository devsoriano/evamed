import { TestBed } from '@angular/core/testing';

import { EndLifeService } from './end-life.service';

describe('EndLifeService', () => {
  let service: EndLifeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndLifeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
