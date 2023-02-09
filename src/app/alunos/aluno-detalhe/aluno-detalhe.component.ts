import { Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent {
  aluno!: Aluno;
  inscricao: Subscription = new Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ){

  }

  ngOnInit(){
    // this.inscricao = this.route.params.subscribe(
    //   (params: any) => {
    //     let id = params['id'];

    //     this.aluno = this.alunosService.getAluno(id);
    //   }
    // )

    this.inscricao = this.route.data.subscribe(
      (info) => {
        console.log(info);
        this.aluno = info['aluno'];
      }
    );
  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  //Como boa prática devemos destruir a subscrição
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
