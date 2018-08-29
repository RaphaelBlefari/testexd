import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Produto } from './produto.model';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../../environments/API_URL';

@Injectable()
export class ProdutoService {

  constructor(private http: HttpClient) { }

  RetornaProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${API_URL}/produtos`);
  }
  RetornaProdutoById(id): Observable<Produto> {
    return this.http.get<Produto>(`${API_URL}/produtos/${id}`);
  }
}
