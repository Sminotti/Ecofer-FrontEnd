import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/model/IUsuario';
import { LoginService } from '../../services/login.service';

import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  usuarioGoogle = this.authService.obtenerUsuarioGoogle(); //observable
  usuarioLogueado: Usuario = {
    id: 0,
    idEmpresa: 0,
    idPersona: 0,
    usuario: '',
    uid: '',
    password: '',
  };
  opened = false;
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(
    private loginService: LoginService,
    private router: Router,
    public authService: AuthService,
    private activatedRoute: ActivatedRoute,
  ) {}
  params = this.activatedRoute.snapshot.params; // tomo el id de params
  mostrarUsuarioLoguedo() {
    this.loginService.userLogued(this.params.id).subscribe((res:Usuario) => {
      this.usuarioLogueado = res;
      console.log("usuarioLoguedo-1:",this.usuarioLogueado)
    });
  }
  logout() {
    this.authService.logout();
    this.usuarioGoogle.subscribe(res =>{
      res=null
    });
    this.router.navigate(['/']);
  }
  ngOnInit(): void {
    this.mostrarUsuarioLoguedo();

  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
