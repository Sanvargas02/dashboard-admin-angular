import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Mis componentes
import { PaginaInicioComponent } from './pages/pagina-inicio/pagina-inicio.component';
import { ListadoPrestadorComponent } from './pages/prestadores-turisticos/listado-prestador/listado-prestador.component';
import { ListadoAtractivoComponent } from './pages/atractivos-turisticos/listado-atractivo/listado-atractivo.component';
import { ListadoMunicipioComponent } from './pages/municipios/listado-municipio/listado-municipio.component';
import { ListadoRutasComponent } from './pages/rutas-turisticas/listado-rutas/listado-rutas.component';

const routes: Routes = [
  {
    //Creamos el ruteo de hijos
    path: '',
    children: [ //En este módulo se cargan las direcciones de este módulo
     //Por defecto
     { path: '', redirectTo: 'pagina-inicio', pathMatch: 'full'},
     //Listado de Vistas en Componentes
     {
      path: 'pagina-inicio',
      component: PaginaInicioComponent,
      children: [
        //Pagina Base donde van todas las vistas
        //Vistas
        { path: '', redirectTo: 'list-prestadores-turisticos', pathMatch: 'full'},
        { path: 'list-prestadores-turisticos', component: ListadoPrestadorComponent },
        { path: 'list-atractivo-turistico', component: ListadoAtractivoComponent},
        { path: 'list-municipio', component: ListadoMunicipioComponent },
        { path: 'list-rutas-turisticas', component: ListadoRutasComponent },
        { path: '**', redirectTo: 'list-prestadores-turisticos' }
      ]
    },
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
