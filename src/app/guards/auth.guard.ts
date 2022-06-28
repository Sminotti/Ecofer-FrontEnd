import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private AuthService: AuthService) {}

  canActivate(): boolean{
    //este metodo retorna true o false segun encuentre el token en el localStorage o no.
    return this.AuthService.checkLocalStorage();
  }
}
