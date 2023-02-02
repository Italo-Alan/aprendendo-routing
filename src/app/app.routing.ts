import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';

//Dentro desse array que declaramos todas as nossas rotas.
const APP_ROUTES: Routes = [
  { path:'', component: HomeComponent},
  { path:'cursos', component: CursosComponent},
  { path:'login', component: LoginComponent},
];

//Usamos aqui o forRoot porque aqui temos as rotas raízes da aplicação.
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);
