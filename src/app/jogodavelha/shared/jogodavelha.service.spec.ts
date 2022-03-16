import { TestBed } from '@angular/core/testing';

import { JogodavelhaService } from './jogodavelha.service';

describe('JogodavelhaService', () => {
  let service: JogodavelhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JogodavelhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
