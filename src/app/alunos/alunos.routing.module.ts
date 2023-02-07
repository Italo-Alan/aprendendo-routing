import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

const alunosRoutes: Routes = [
  //Dessa forma, fazemos com que o componente e a rota alunos sejam os principais e os dentro do array sejam componentes filhos
  {path: 'alunos', component: AlunosComponent, children:[
    //Por '/novo' ter sido adicionado hard coded, ele precisa vir primeiro para não ter colisão de rotas
    {path: 'novo', component: AlunoFormComponent},
    {path: ':id', component: AlunoDetalheComponent},
    {path: ':id/editar', component: AlunoFormComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule {}
