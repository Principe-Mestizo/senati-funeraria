import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Formulario } from '../models/formulario.model';


@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private readonly API_URL = environment.apiURL;

  constructor(
    private http: HttpClient
  )
  { }

  getEnvios(): Observable<Formulario[]> {
    return this.http.get<Formulario[]>( `${this.API_URL}/formularios`);
  }

  envioForumulario(data: Formulario): Observable<Formulario>{
    return this.http.post<Formulario>(`${this.API_URL}/formularios`, data)
  }

}
