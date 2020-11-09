import { TestBed } from '@angular/core/testing';

import { ConstructionSystemsService } from './construction-systems.service';

describe('ConstructionSystemsService', () => {
  let service: ConstructionSystemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstructionSystemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
