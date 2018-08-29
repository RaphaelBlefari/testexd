import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../../../environments/API_URL';
import { Observable } from 'rxjs/Observable';
import { Carrinho } from './carrinho-model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CarrinhoService {

  public SubjectCarrinho = new Subject<Carrinho>();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  RetornaCarrinho(carrinhoId: number): Observable<Carrinho> {
    return this.http.get<Carrinho>(`${API_URL}/carrinhos/${carrinhoId}`);
  }

  InseriItemCarrinho(carrinho: Carrinho): Observable<any> {
    return this.http.put(`${API_URL}/carrinhos/${carrinho.id}`,
      JSON.stringify(carrinho),
      this.httpOptions);
  }

  DeletaItemCarrinho(carrinho: Carrinho) {
    return this.http.delete(`${API_URL}/carrinhos/${carrinho}`);
  }


  AtualizaCarrinho(carrinho) {
    this.SubjectCarrinho.next(carrinho);
  }
}
