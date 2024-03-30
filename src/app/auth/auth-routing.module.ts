import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LatoutPageComponent } from './pages/latout-page/latout-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { isGuestGuard, isUserAuthenticatedGuard } from './guards/auth.guard';
import { EmpleadosPageComponent } from './pages/empleados-page/empleados-page.component';
import { ServiciosPageComponent } from './pages/servicios-page/servicios-page.component';
import { VentasPageComponent } from './pages/ventas-page/ventas-page.component';

const routes: Routes = [
  {
    path: 'layout',
    component: LatoutPageComponent,
    canActivate: [isUserAuthenticatedGuard],
  },

     // TODO: crea usuarios

  // {
  //   path: 'register',
  //   component: SignupPageComponent,
  //   canActivate: [isGuestGuard]
  // },

 {
   path: 'empleados',
   component: EmpleadosPageComponent,
   // canActivate: [isGuestGuard]

 },
 {
   path: 'servicios',
   component: ServiciosPageComponent,
   canActivate: [isUserAuthenticatedGuard],

 },
 {
   path: 'ventas',
   component: VentasPageComponent,
   // canActivate: [isGuestGuard]

 },

  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [isGuestGuard]

  },


  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
