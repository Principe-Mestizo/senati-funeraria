import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFundPageComponent } from './shared/pages/not-fund-page/not-fund-page.component';

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
    path: '404',
    component : NotFundPageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
