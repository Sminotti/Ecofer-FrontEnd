import { Injectable, EventEmitter, Output } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
// import { Login } from '../model/Ilogin';
import { Usuario } from '../model/IUsuario';

const initUsuario: Usuario = {
  usuario: '',
  password: '',
  uid: '',
};

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  // API_URI = 'http://localhost:3000';
  // @Output() envioUsuario: EventEmitter<any>= new EventEmitter();

  //observable
  private userLoged$: any = new BehaviorSubject<Usuario>(initUsuario);

  constructor() {}
  //devuelve/exporta el usuario
  get usuarioLogueado$(): Observable<Usuario> {
    return this.userLoged$.asObservable();
  }
  // guarda el usuario logueado
  guardarUsuarioLogueado(usuarioGuardado: Usuario): void {
    this.userLoged$.next(usuarioGuardado);
  }
}
