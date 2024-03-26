import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthCredentials } from '../models/auht-credentials.model';
import { Observable } from 'rxjs';
import { UserRegister } from '../models/user-register.model';

@Injectable({
  providedIn: 'root'
})
export class AuhtService {

  private readonly API_URL = environment.apiURL;

  constructor(
    private http: HttpClient
  )
  { }

  login(credentials: AuthCredentials): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, credentials);
  }

  register( user: UserRegister): Observable<any>{
    return this.http.post(`${this.API_URL}/register`, user);
  }

  logout(): Observable<any>{
    return this.http.delete(`${this.API_URL}/logout`);
  }
}
