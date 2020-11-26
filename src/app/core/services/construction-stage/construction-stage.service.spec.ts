import { TestBed } from '@angular/core/testing';

import { ConstructionStageService } from './construction-stage.service';

describe('ConstructionStageService', () => {
  let service: ConstructionStageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstructionStageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
