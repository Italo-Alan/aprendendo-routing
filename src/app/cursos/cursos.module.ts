import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosService } from './cursos.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    //Módulo raiz da aplicação importamos o BrowserModule, normalmente importado apenas no app.module
    //Módulos de funcionalidades importamos o commonModule(NgIf, ngFor e outras diretivas)
    CommonModule,
    RouterModule
    //Para diretivas de formulário usamos FormsModule
  ],
  exports: [],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  providers: [CursosService],
})
export class CursosModule { }
