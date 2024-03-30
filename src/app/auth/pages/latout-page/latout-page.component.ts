
import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { Chart } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ServicioService } from '../../services/servicio.service';
@Component({
  selector: 'app-latout-page',
  templateUrl: './latout-page.component.html',
  styleUrls: ['./latout-page.component.scss']
})
export class LatoutPageComponent implements OnInit{
  sideBarOpen = true;
  chart: any;

  constructor(private _servicioService: ServicioService) {}

  ngOnInit(): void {
    this._servicioService.getTotalServicios().subscribe(total => {
      this._servicioService.getTotalUsers().subscribe(totalUsers => {
        this._servicioService.getTotalSolicitudes().subscribe(totalSolicitudes => {
          const data = {
            labels: ['Total Servicios', 'Total Usuarios', 'Total Solicitudes'],
            datasets: [{
              label: 'Funerarls Registro',
              data: [total, totalUsers, totalSolicitudes],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ]
            }]
          };

          this.chart = new Chart('chart', {
            type: 'bar',
            data: data
          });
        });
      });
    });
  }

  sideBarToggler(): void {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
