import { Component, OnInit } from '@angular/core';
import { GeolocalizacaoService } from './geolocalizacao.service';
import { Filial } from '../shared/filial/filial-model';
import { utf8Encode } from '@angular/compiler/src/util';
import { Weather } from '../shared/filial/result-model';

@Component({
  selector: 'app-geolocalizacao',
  templateUrl: './geolocalizacao.component.html',
  styleUrls: ['./geolocalizacao.component.css'],
  providers: [GeolocalizacaoService]
})
export class GeolocalizacaoComponent implements OnInit {

  myReader: any;
  fileToUpload: File;
  filiais: Filial[] = [];
  filial: Filial;
  count: Number;
  weather: Weather;
  teste;

  constructor(private geoLocalizacaoService: GeolocalizacaoService) { }

  GeraGlobal(teste: HTMLTextAreaElement) {

    console.log(teste);
    this.filiais.forEach(filial => {
      if (!filial.Latitude) {
        setTimeout(() => {
          this.geoLocalizacaoService.pegarLocalizacao(filial).subscribe(res => {
            this.weather = res;
            filial.Latitude = this.weather.results[0].geometry.location.lat;
            filial.Longitude = this.weather.results[0].geometry.location.lng;
          });
        }, 100);
      }
    });

  }

  retornaGeolocalizacao(filial: Filial) {
    this.geoLocalizacaoService.pegarLocalizacao(filial).subscribe(res => {

      setTimeout(() => { /*Your Code*/       this.weather = res;
        filial.Latitude = this.weather.results[0].geometry.location.lat;
        filial.Longitude = this.weather.results[0].geometry.location.lng;
      }, 1000);

    });
  }

  handleFileInput(files: FileList) {
    const reader = new FileReader();
    reader.readAsText(files[0]);
    const me = this;
    const filiais = this.filiais;
    const d = reader.onload = function () {
      me.myReader = reader.result;
      sessionStorage.clear();
      sessionStorage.setItem('teste', me.myReader);
    };

    this.count = 0;
    const x = window.sessionStorage.getItem('teste').replace('\r', '').split(',');

    x.forEach(element => {
      element = element.replace('\r\n', '');

      switch (this.count) {
        case 0: this.filial = new Filial;
          this.filial.ip = element;
          this.count = 1;
          break;
        case 1: this.filial.Pais = element;
          this.count = 2;
          break;
        case 2: this.filial.RazaoSocial = element;
          this.count = 3;
          break;
        case 3: this.filial.Cidade = element;
          this.count = 4;
          break;
        case 4: this.filial.Estado = element;
          this.count = 5;
          break;
        case 5: this.filial.Filial = element;
          this.count = 6;
          break;
        default:
          break;
      }

      if (this.count === 6) {
        this.filiais.push(this.filial);
        console.log(this.filial.Filial + '-' + this.filial.ip);
        this.count = 0;
      }
    });
  }

  ngOnInit() {
  }
}
