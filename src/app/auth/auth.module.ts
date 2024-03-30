import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LatoutPageComponent } from './pages/latout-page/latout-page.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { EmpleadosPageComponent } from './pages/empleados-page/empleados-page.component';
import { VentasPageComponent } from './pages/ventas-page/ventas-page.component';
import { ServiciosPageComponent } from './pages/servicios-page/servicios-page.component';
import { TableServicesComponent } from './components/table-services/table-services.component';
// tablas
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { ModalServicioComponent } from './modales/modal-servicio/modal-servicio.component';
import { ModalVentasComponent } from './modales/modal-ventas/modal-ventas.component';

// modales
import {MatDialogModule} from '@angular/material/dialog';
// spiner
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// mensaje
import {MatSnackBarModule} from '@angular/material/snack-bar';
// barra superior
import {MatProgressBarModule} from '@angular/material/progress-bar';
// Select
import {MatSelectModule} from '@angular/material/select';
import { TableUsersComponent } from './components/table-users/table-users.component';
import { TableFormularioComponent } from './components/table-formulario/table-formulario.component';

@NgModule({
  declarations: [
    SignupPageComponent,
    LatoutPageComponent,
    LoginPageComponent,
    EmpleadosPageComponent,
    VentasPageComponent,
    ServiciosPageComponent,
    TableServicesComponent,
    ModalServicioComponent,
    ModalVentasComponent,
    TableUsersComponent,
    TableFormularioComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatSelectModule,

  ]
})
export class AuthModule { }
