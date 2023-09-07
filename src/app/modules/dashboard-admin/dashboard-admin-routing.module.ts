import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicioComponent } from './pages/pagina-inicio/pagina-inicio.component';

const routes: Routes = [
  {
    //Creamos el ruteo de hijos
    path: '',
    children: [ //En este módulo se cargan las direcciones de este módulo
     //Por defecto
     { path: '', redirectTo: 'dashboard-admin', pathMatch: 'full'},
     //Listado de Vistas en Componentes
     { path: 'pagina-inicio', component: PaginaInicioComponent },
     //Ruta no conocida
     { path: '**', redirectTo: 'pagina-inicio' } //Ruta por defecto, la primera ruta a la que va a ingresar en el módulo
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAdminRoutingModule { }
