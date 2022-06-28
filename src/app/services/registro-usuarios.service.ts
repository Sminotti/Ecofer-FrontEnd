import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { RegistroUsuario } from '../model/IregistroUsuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroUsuariosService {

  API_URI = 'http://localhost:3000'; //guardo la direccion del backEnd (API)

  constructor(private http: HttpClient) { }

  registroUsuario(registroUsuario: any):Observable<Object>{
    return this.http.post<Object>(`${this.API_URI}/registro/create`,registroUsuario);
  }
}
