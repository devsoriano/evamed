import { TestBed } from '@angular/core/testing';

import { ElectricitConsumptionService } from './electricit-consumption.service';

describe('ElectricitConsumptionService', () => {
  let service: ElectricitConsumptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectricitConsumptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
