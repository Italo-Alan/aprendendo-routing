import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  cursos: any[] | undefined;

  constructor(private cursosService: CursosService){

  }

  //Quando vamos carregar alguma informação, o ngOnInit é o melhor lugar para se fazer isso
  ngOnInit(){
    this.cursos = this.cursosService.getCursos();
  }
}
