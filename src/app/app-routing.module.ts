import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { HomeComponent } from './home/home.component';
import { GeolocalizacaoComponent } from './geolocalizacao/geolocalizacao.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'catalogo',
    component: CatalogoComponent
  },
  {
    path: 'geolocalizacao',
    component: GeolocalizacaoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
