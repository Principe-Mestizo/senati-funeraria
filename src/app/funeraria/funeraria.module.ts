import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunerariaRoutingModule } from './funeraria-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { SectionInformationComponent } from './components/section-information/section-information.component';
import { RouterModule } from '@angular/router';
import { NavegationComponent } from './components/navegation/navegation.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePageComponent,
    ServicesPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    UbicacionComponent,
    SectionInformationComponent,
    NavegationComponent

  ],
  imports: [
    CommonModule,
    FunerariaRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule

  ],
  exports : [
    FooterComponent
  ]
})
export class FunerariaModule { }