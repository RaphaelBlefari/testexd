import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../shared/produto/produto.service';
import { Produto } from '../shared/produto/produto.model';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  produtos: Produto[] = [];
  produto: Produto;
  teste = 'teste ok';

  constructor(protected produtoService: ProdutoService) { }

  ngOnInit() {
    this.BuscaProdutoServico();
  }

  recebeValorfilho(respostaFilho: Produto) {
    this.produtoService.RetornaProdutoById(respostaFilho.id).subscribe(res => {
      this.produto = res;
      console.log('O evento foi recebido pelo pai >>>> ', respostaFilho);
    });
  }

  sairDetalhe() {
    this.produto = undefined;
  }

  BuscaProdutoServico() {
    this.produtoService.RetornaProdutos().subscribe(res => {
      this.produtos = res;
      console.log(this.produtos);
    });
  }
}
