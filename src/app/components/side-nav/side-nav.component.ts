import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';
import { Usuario } from '../../model/IUsuario';
//import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  usuario: Usuario[] = [];
  showFiller = false;
  usuarioGoogle = this.authService.obtenerUsuario();

  constructor(public authService: AuthService) {
    this.usuario = JSON.parse(localStorage.getItem('user')!); // se pone asi por si es null
    console.log('usuario recuperado:', this.usuario);
  }

  //hacer funcion que traiga los datos del login copn google
}
