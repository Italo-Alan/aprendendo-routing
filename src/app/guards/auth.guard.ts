import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//Este é o nosso guarda de rota, foi criado como um service, mas modificado para poder cumprir o objetivo desejado
//Ele é um guarda de rota pois implementamos o CanActivate
export class AuthGuard implements CanActivate{

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):  Observable<boolean> | boolean {

    if(this.authService.usuarioEstaAutenticado()){
      //Caso o usuário possa utilizar a rota e false caso não
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
