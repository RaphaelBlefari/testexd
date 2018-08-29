import { Component, OnInit } from '@angular/core';
import { Carrinho } from '../shared/carrinho/carrinho-model';
import { CarrinhoService } from '../shared/carrinho/carrinho.service';
import { Produto } from '../shared/produto/produto.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  carrinho: Carrinho;

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit() {

    this.carrinhoService.SubjectCarrinho.subscribe(res => {
      this.carrinho = res;
      console.log('dsa');
    });

    this.carrinhoService.RetornaCarrinho(1).subscribe(res => {
      this.carrinho = res;
    });
  }

  deletaCarrinho(produto: Produto, index: number) {
    console.log(produto);
    console.log(index);
    this.carrinho.Produtos.splice(index, 1);

    console.log(this.carrinho.Produtos);
    this.carrinhoService.DeletaItemCarrinho(this.carrinho).subscribe(res => {
      console.log(res);
    });
  }

  limpaProdutosCarrinho() {
    this.carrinhoService.LimpaProdutosCarrinho(this.carrinho)
      .subscribe(res => {
        this.carrinho = res;
      });
  }
}
