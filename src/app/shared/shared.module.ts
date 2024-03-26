import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFundPageComponent } from './pages/not-fund-page/not-fund-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CardFunerariaComponent } from './components/card-funeraria/card-funeraria.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule} from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule} from '@angular/material/toolbar';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderSharedComponent } from './components/header-shared/header-shared.component';
import { FooterSharedComponent } from './components/footer-shared/footer-shared.component';


@NgModule({
  declarations: [
    NotFundPageComponent,
    CardFunerariaComponent,
    SidebarComponent,
    HeaderSharedComponent,
    FooterSharedComponent,
    FooterSharedComponent

  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    FlexLayoutModule,

  ],
  exports:[
    NotFundPageComponent,
    CardFunerariaComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    SidebarComponent,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    FlexLayoutModule,
    HeaderSharedComponent,
    FooterSharedComponent
  ]
})
export class SharedModule { }
