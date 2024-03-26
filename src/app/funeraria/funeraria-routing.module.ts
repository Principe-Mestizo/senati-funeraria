import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';

const routes: Routes = [

  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about', component: AboutPageComponent,
  },
  {
    path: 'contact', component: ContactPageComponent,
  },
  {
    path: 'service', component: ServicesPageComponent,
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunerariaRoutingModule { }
