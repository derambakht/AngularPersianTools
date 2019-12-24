import { TestBed } from '@angular/core/testing';

import { PersianToolsService } from './persian-tools.service';

describe('PersianToolsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersianToolsService = TestBed.get(PersianToolsService);
    expect(service).toBeTruthy();
  });
});
