import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { UserInterface } from '../models/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  headers : HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  regiterUser(name: string, email: string, password: string){
    const url_api = 'http://localhost:3000/api/Users';
    return this.http.post<UserInterface>(
      url_api,
      {
      name: name,
      email: email,
      password: password
      }, 
      {headers: this.headers}
    ).pipe(map(data => data));
  }

  loginUser(email: string, password: string): Observable<any>{
    const url_api = 'http://localhost:3000/api/Users/login?include=user';
    return this.http.post<UserInterface>(
      url_api,
      {
        email: email,
        password: password
      },
      { headers: this.headers}
      ).pipe(map(data => data));
  }

  setUser(user: UserInterface): void{
    let Usuario = JSON.stringify(user);
    localStorage.setItem('usuarioActual', Usuario);
  }

  getCurrentUser(): UserInterface {
    let Usuario = localStorage.getItem('usuarioActual');
    if(!isNullOrUndefined(Usuario)){
      let usuario: UserInterface = JSON.parse(Usuario);
      return usuario;
    }
    else{
      return null;
    }
  }

  setToken(token): void{
    localStorage.setItem('tokenAcceso',token);
  }

  getToken(){
    return localStorage.getItem('tokenAcceso');
  }

  logoutUser(){
    let tokenAcceso = localStorage.getItem('tokenAcceso');
    const url_api = 'http://localhost:3000/api/Users/logout?access_token=${tokenAcceso}';
    localStorage.removeItem('tokenAcceso');
    localStorage.removeItem('usuarioActual');
    return this.http.post<UserInterface>(
      url_api,
      {headers: this.headers}
    );
  }
}