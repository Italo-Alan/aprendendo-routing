import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
// import { CursosComponent } from './cursos/cursos.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

//Dentro desse array que declaramos todas as nossas rotas.
const appRoutes: Routes = [

  { path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
    canLoad: [AuthGuard]
  },
  { path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
    canActivate: [AuthGuard],
    canActivateChild: [AlunosGuard],
    canLoad: [AuthGuard]
  },
  //É interessante declarar o caminho vazio e a página não encontrada por ultimo, e o que está hardcoded antes
  { path:'login', component: LoginComponent},
  { path:'', component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PaginaNaoEncontradaComponent,
  // canActivate: [AuthGuard] Nesse caso, ele faria o redirecionamento para a página de Login
}
  //Caso seja necessário colocar um outro caminho que precise de um ID, faremos da seguinte forma:
  // { path:'curso/:id', component: CursoDetalheComponent},
  // { path:'cursos', component: CursosComponent},
  //Podemos dar qualquer nome desejado, os 2 pontos servem para identificar como um ID
  // { path:'naoEncontrado', component: CursoNaoEncontradoComponent}
];

//Usamos aqui o forRoot porque aqui temos as rotas raízes da aplicação.
// export const routing: ModuleWithProviders<RouterModule> = ;

@NgModule({
  //É interessante e bom o uso da hash quando estamos trabalhando junto do back end, afim de evitar que as linguagens de back não confundam url com "consumo de API"
  imports:[RouterModule.forRoot(appRoutes, {useHash: true})],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
