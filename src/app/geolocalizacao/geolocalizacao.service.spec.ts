import { TestBed, inject } from '@angular/core/testing';

import { GeolocalizacaoService } from './geolocalizacao.service';

describe('GeolocalizacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeolocalizacaoService]
    });
  });

  it('should be created', inject([GeolocalizacaoService], (service: GeolocalizacaoService) => {
    expect(service).toBeTruthy();
  }));
});
