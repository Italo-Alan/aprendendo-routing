import { IFormCanDeactivate } from './../../guards/iform-candeactivate';
import { Component } from '@angular/core';

import { Subscription } from 'rxjs';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements IFormCanDeactivate{

  aluno: any;
  inscricao: Subscription = new Subscription;
  private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private AlunosService: AlunosService
  ){}

  ngOnInit(){
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.AlunosService.getAluno(id);

        if(this.aluno === null){
          this.aluno = {};
        }
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  onInput(){
    this.formMudou = true;
  }

  podeMudarRota() {
    if (this.formMudou) {
      if (confirm('tem certeza que deseja mudar de página?') == true) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }

  podeDesativar() {
    return this.podeMudarRota();
  }
}
