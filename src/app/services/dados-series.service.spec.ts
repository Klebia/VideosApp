import { TestBed } from '@angular/core/testing';

import { DadosSeriesService } from './dados-series.service';

describe('DadosSeriesService', () => {
  let service: DadosSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosSeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
