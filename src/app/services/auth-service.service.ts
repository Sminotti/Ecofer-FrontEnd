import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public afauth: AngularFireAuth) {}

  authState = new BehaviorSubject<boolean>(false); // variable booleana

  authenticate(token: any): void {
    // guarda el token en el localStorage y le asigna true a la variable
    this.authState.next(true);
    localStorage.setItem('token', token);
  }
  usuarioLogueado(usuario: any): void {
    // guarda el usuario logueado en el localStorage y le asigna true a la variable
    localStorage.setItem('user', JSON.stringify(usuario));
  }

  isAuthenticate(): boolean {
    // pregunta si hay algun usuario logueado - si hay devuelve true
    const logueado = this.authState.value;
    console.log('logueado:', logueado);
    return logueado;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authState.next(false);
    this.afauth.signOut();
  }

  checkLocalStorage(): boolean {
    const token = localStorage.getItem('token');

    return !!token; //= token ? true : false
  }

  checkUserLogued(): boolean {
    //boolean
    const userLogued = localStorage.getItem('user');

    return !!userLogued; //= userLogued ? true : false
  }

  async loginGoogle() {
    try {
      return await this.afauth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
    } catch (error) {
      console.log('error login con Google:', error);
      return null;
    }
  }
  obtenerUsuarioGoogle() {
    console.log("obtener usuario goolge:",this.afauth.user);
    return this.afauth.authState;
  }
}
