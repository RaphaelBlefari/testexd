import { Component, OnInit } from '@angular/core';
import { Carrinho } from '../shared/carrinho/carrinho-model';
import { CarrinhoService } from '../shared/carrinho/carrinho.service';

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

  deletaCarrinho(carrinho: Carrinho) {
    this.carrinhoService.DeletaItemCarrinho(carrinho).subscribe(res => {
      console.log('res');
    });
  }
}
