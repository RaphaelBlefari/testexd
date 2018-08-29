import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filial } from '../shared/filial/filial-model';
import { Observable } from 'rxjs/Observable';
import { Weather } from '../shared/filial/result-model';


@Injectable()
export class GeolocalizacaoService {

  constructor(private http: HttpClient) { }

  pegarLocalizacao(filial: Filial): Observable<Weather> {
    return this.http.get<Weather>(`http://maps.google.com/maps/api/geocode/json?components=administrative_area:${filial.Estado}`);
  // return this.http.get<Weather>(`http://maps.google.com/maps/api/geocode/json?address=Brazili+${filial.Cidade}+${filial.Estado}=false`);
  }

  importaArquivo() {
    this.http.get('app/files/arquivo.txt').subscribe(data => {
      console.log(data);
    });
  }
}
