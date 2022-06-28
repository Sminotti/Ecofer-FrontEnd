import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Login } from '../model/Ilogin';
import { Usuario } from '../model/IUsuario';
import { AuthService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  API_URI = 'http://localhost:3000'; //guardo la direccion del backEnd (API)
  usuario: Usuario[] = [];

  constructor(public authService: AuthService, private http: HttpClient) {
    this.usuario = JSON.parse(localStorage.getItem('user')!); // se pone asi por si es null
  }

  login(login: Usuario) {
    return this.http.post(`${this.API_URI}/login`, login);
  }

  userLogued(id: number) {
    return this.http.get<Usuario>(`${this.API_URI}/${id}`);
  }
}
