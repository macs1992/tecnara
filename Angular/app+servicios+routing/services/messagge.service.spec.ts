import { TestBed, inject } from '@angular/core/testing';

import { MessaggeService } from './messagge.service';

describe('MessaggeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessaggeService]
    });
  });

  it('should be created', inject([MessaggeService], (service: MessaggeService) => {
    expect(service).toBeTruthy();
  }));
});
