import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent {

  id!: number;
  inscricao: Subscription | undefined;
  curso: any;

  //Como o route já está sendo inicializado no constructor ele poderá ser usado no ngOnInit
  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService,
    private router: Router
  ){
    // this.id = this.route.snapshot.params['id'];
    // console.log(this.route);
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.curso = this.cursosService.getCurso(this.id);

        if(this.curso === null || this.curso === undefined || this.curso === ""){
          this.router.navigate(['naoEncontrado']);
        }
    })
  }

  ngOnDestroy(){
    this.inscricao?.unsubscribe();
  }
}
