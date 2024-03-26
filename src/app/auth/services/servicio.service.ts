import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicios } from '../models/servicio.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private readonly API_URL = 'http://127.0.0.1:8000/api';

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
}
