import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

//Dentro desse array que declaramos todas as nossas rotas.
const cursosRoutes: Routes = [
  //Caso seja necessário colocar um outro caminho que precise de um ID, faremos da seguinte forma:
  { path:'cursos', component: CursosComponent},
  //Podemos dar qualquer nome desejado, os 2 pontos servem para identificar como um ID
  { path:'curso/:id', component: CursoDetalheComponent},
  { path:'naoEncontrado', component: CursoNaoEncontradoComponent}
];

@NgModule({
  //Usamos aqui o forChild por ser um módulo de funcionalidade
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule {}
