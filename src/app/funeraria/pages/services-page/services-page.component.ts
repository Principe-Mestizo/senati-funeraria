import { Component, OnInit } from '@angular/core';
import { Servicios } from 'src/app/auth/models/servicio.model';
import { ServicioService } from 'src/app/auth/services/servicio.service';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit{

  public servicios: Servicios[] = [];

  constructor(private _servicioService: ServicioService){}
  ngOnInit(): void {
    this._servicioService.getServicios()
      .subscribe( servicios => {
        this.servicios = servicios;
      })
  }


}
