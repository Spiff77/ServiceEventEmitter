import { TestBed } from '@angular/core/testing';

import { PandaService } from './panda.service';

describe('PandaService', () => {
  let service: PandaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PandaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
