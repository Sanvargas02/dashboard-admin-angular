import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAdminRoutingModule } from './dashboard-admin-routing.module';

import { PaginaInicioComponent } from './pages/pagina-inicio/pagina-inicio.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ListadoPrestadorComponent } from './pages/prestadores-turisticos/listado-prestador/listado-prestador.component';
import { ListadoAtractivoComponent } from './pages/atractivos-turisticos/listado-atractivo/listado-atractivo.component';
import { ListadoMunicipioComponent } from './pages/municipios/listado-municipio/listado-municipio.component';
import { ListadoRutasComponent } from './pages/rutas-turisticas/listado-rutas/listado-rutas.component';


@NgModule({
  declarations: [
    PaginaInicioComponent,
    SideBarComponent,
    ListadoPrestadorComponent,
    ListadoAtractivoComponent,
    ListadoMunicipioComponent,
    ListadoRutasComponent
  ],
  imports: [
    CommonModule,
    DashboardAdminRoutingModule
  ]
})
export class DashboardAdminModule { }
