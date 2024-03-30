import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Servicios } from '../models/servicio.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private readonly API_URL = environment.apiURL;

  constructor( private http: HttpClient)
  {}

  getServicios(): Observable<Servicios[]> {
    return this.http.get<Servicios[]>( `${this.API_URL}/services`);
  }

  getServicio(id: number): Observable<Servicios>{
    return this.http.get<Servicios>(`${this.API_URL}/services/${id}`)
  }

  createService(data: Servicios): Observable<Servicios>{
    return this.http.post<Servicios>(`${this.API_URL}/services`, data)
  }

  updateService(id: number, data: Servicios):Observable<Servicios>{
    return this.http.put<Servicios>(`${this.API_URL}/services/${id}`, data );
  }

  deleteService(id:number): Observable<any>{
    return this.http.delete<any>(`${this.API_URL}/services/${id}`);
  }


  // TODO: Total de datos en las tablas
  getTotalServicios(): Observable<number> {
    return this.http.get<{ total_services: number }>(`${this.API_URL}/total-services`)
               .pipe(map(response => response.total_services));
  }

  getTotalUsers(): Observable<number> {
    return this.http.get<{ users: number }>(`${this.API_URL}/total-users`)
               .pipe(map(response => response.users));
  }

  getTotalSolicitudes(): Observable<number> {
    return this.http.get<{ formularios: number }>(`${this.API_URL}/total-solicitud`)
               .pipe(map(response => response.formularios));
  }
}
