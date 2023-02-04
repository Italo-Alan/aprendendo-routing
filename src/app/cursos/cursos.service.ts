import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos(){
    return [
      {id: 1, nome: 'Angular 2'},
      {id: 2, nome: 'Java'},
      {id: 3, nome: 'Javascript'}
    ];
  }

  // getCurso(id: number | undefined){
  //   let cursos = this.getCursos();
  //   for(let i = 0; i < cursos.length; i++){
  //     let curso = cursos[i];

  //     if(curso.id == id){
  //       return curso;
  //     }
  //   }

  //   return null;
  // }

  getCurso( id: number) {
    const cursos = this.getCursos();

    console.log(cursos.filter(element => element.id == id));

    return cursos.find(element => element.id == id); }

  constructor(){

   }
}
