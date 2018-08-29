import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ProdutosComponent } from './catalogo/produtos/produtos.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProdutoService } from './shared/produto/produto.service';
import { HttpClientModule } from '@angular/common/http';
import { RealPipe } from './shared/util/real.pipe';
import { DetalheComponent } from './catalogo/detalhe/detalhe.component';
import { CarrinhoService } from './shared/carrinho/carrinho.service';
import { GeolocalizacaoComponent } from './geolocalizacao/geolocalizacao.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    ProdutosComponent,
    HeaderComponent,
    HomeComponent,
    RealPipe,
    DetalheComponent,
    GeolocalizacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProdutoService,
    CarrinhoService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
