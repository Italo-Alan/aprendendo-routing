import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AlunosGuard implements CanActivateChild{

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):  Observable<boolean> | boolean {

    console.log(route);
    console.log(state);

    if(state.url.includes('editar')){
      // alert('Pode não, irmão')
      // return false;
    }

    return true;
  }
}
