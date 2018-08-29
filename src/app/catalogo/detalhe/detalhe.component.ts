import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from '../../shared/produto/produto.model';
import { CarrinhoService } from '../../shared/carrinho/carrinho.service';
import { Carrinho } from '../../shared/carrinho/carrinho-model';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  @Input() produto: Produto;
  @Output() voltar = new EventEmitter();
  carrinho: Carrinho;
  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit() {
  }

  voltarProduto() {
    this.voltar.emit();
  }

  InseriCarrinho(produto: Produto) {
    this.carrinhoService.RetornaCarrinho(1).subscribe(res => {
      this.carrinho = res;
      this.carrinho.Produtos.push(this.produto);
      this.carrinhoService.InseriItemCarrinho(this.carrinho).subscribe(reskkkTavaDandoerro2Reskkk => {
        console.log(reskkkTavaDandoerro2Reskkk);
        this.carrinhoService.AtualizaCarrinho(this.carrinho);
      });
      return this.carrinho;
    });
  }
}
