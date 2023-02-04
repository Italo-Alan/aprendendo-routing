import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

//Dentro desse array que declaramos todas as nossas rotas.
const APP_ROUTES: Routes = [
  { path:'', component: HomeComponent},
  //Caso seja necessário colocar um outro caminho que precise de um ID, faremos da seguinte forma:
  { path:'cursos', component: CursosComponent},
  //Podemos dar qualquer nome desejado, os 2 pontos servem para identificar como um ID
  { path:'curso/:id', component: CursoDetalheComponent},
  { path:'login', component: LoginComponent},
  { path:'naoEncontrado', component: CursoNaoEncontradoComponent}
];

//Usamos aqui o forRoot porque aqui temos as rotas raízes da aplicação.
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);
