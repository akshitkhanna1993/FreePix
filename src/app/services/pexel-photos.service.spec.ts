import { TestBed } from '@angular/core/testing';

import { PexelPhotosService } from './pexel-photos.service';

describe('PexelPhotosService', () => {
  let service: PexelPhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PexelPhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
