import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: Aluno[] = [
    {id: 1, nome: 'Italo', email:"italo@email.com"},
    {id: 2, nome: 'Isabelle', email:"isabelle@email.com"},
    {id: 3, nome: 'Ana', email:"ana@email.com"},
    {id: 4, nome: 'João', email:"joao@email.com"},
  ];

  getAlunos(){
    return this.alunos;
  }

  getAluno(id: number){
    for(let i = 0; i< this.alunos.length; i++){
      let aluno = this.alunos[i];
      if(aluno.id == id){
        return aluno;
      }
    }

    return null;
  }

  constructor() { }
}
