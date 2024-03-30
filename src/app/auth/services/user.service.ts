import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Servicios } from '../models/servicio.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_URL = environment.apiURL;

  constructor(
    private http: HttpClient
  )
  { }
  getUsers(): Observable<Servicios[]> {
    return this.http.get<Servicios[]>( `${this.API_URL}/usuarios`);
  }

}
