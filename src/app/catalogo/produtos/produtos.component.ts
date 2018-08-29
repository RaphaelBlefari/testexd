import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Produto } from '../../shared/produto/produto.model';
import { CatalogoComponent } from '../catalogo.component';
import { ProdutoService } from '../../shared/produto/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent extends ProdutoService implements OnInit {

  @Input() produto;
  @Output() retornaValorCatalogo = new EventEmitter();



  ngOnInit() {

  }



  feedback(totalvalor: number) {
    console.log('Enviando resposta para o component pai');
    this.retornaValorCatalogo.emit(this.produto);
  }
}
