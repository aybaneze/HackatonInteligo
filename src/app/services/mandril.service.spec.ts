import { TestBed, inject } from '@angular/core/testing';

import { MandrilService } from './mandril.service';

describe('MandrilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MandrilService]
    });
  });

  it('should be created', inject([MandrilService], (service: MandrilService) => {
    expect(service).toBeTruthy();
  }));
});
