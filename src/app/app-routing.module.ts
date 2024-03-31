import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },

  {
    path: '',
    loadChildren: () => import('./funeraria/funeraria.module').then( m => m.FunerariaModule)
  },

  {
    path: '**',
    redirectTo: 'admin'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
