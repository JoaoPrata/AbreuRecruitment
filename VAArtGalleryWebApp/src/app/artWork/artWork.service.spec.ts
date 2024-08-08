import { TestBed } from '@angular/core/testing';

import { ArtWorkService } from './artWork.service';

describe('ArtWorkService', () => {
  let service: ArtWorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtWorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
