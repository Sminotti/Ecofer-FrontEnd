import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

import { Usuario } from '../../model/IUsuario';
import { UsuarioGoogle } from 'src/app/model/IloginGoogle';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // @HostBinding('class') classes = 'row';
  hide = true;

  usuario: Usuario = {
    id: 0,
    idEmpresa: 0,
    idPersona: 0,
    usuario: '',
    uid: '',
    password: '',
    nombre: '',
    apellido: '',
  };
  usuarioGoogle: UsuarioGoogle | undefined;

  messageValidators!: UntypedFormGroup;

  constructor(
    public fb: UntypedFormBuilder,
    private loginService: LoginService,
    private router: Router,
    private authService: AuthService,
    private usuariosService: UsuariosService
  ) {}

  formLogin = new UntypedFormGroup({
    usuario: new UntypedFormControl('', [Validators.required,Validators.minLength(5)]),
    password: new UntypedFormControl('', [Validators.required]),
  });

  // login con usuario y contraseña
  ingresar() {
    if (this.formLogin.valid) {
      //const value = this.formLogin.valid;
      this.loginService
        .login(this.formLogin.value)
        .subscribe((dataLogin?: any) => {
          this.usuario = dataLogin.user;
          // guardo en el observable el usuario logueado
          this.usuariosService.guardarUsuarioLogueado(this.usuario);

          // this.usuariosService.envioUsuario.emit(this.usuario)
          if (dataLogin['message'] == 'usuario encontrado') {
            this.usuariosService.usuarioLogueado$.subscribe((user: Usuario) => {
              this.usuario = user;
            });
            this.authService.authenticate(dataLogin['token']); // llamo a la funcion del service que guarda el token en el LocalStorage
            this.authService.usuarioLogueado(dataLogin['user']); // llamo a la funcion del service que guarda el user en el LocalStorage

            this.router.navigate(['admin/productos']);
          } else {
            this.formLogin.reset();
            console.log('datos incorrectos');
          }
          return this.usuario;
        });
    }
  }
  ingresarGoogle() {
    this.authService
      .loginGoogle()
      .then((respuesta?: any) => {
        this.usuarioGoogle = respuesta;
        console.log('login con Google:', this.usuarioGoogle);
        this.router.navigate(['/productos']);
      })
      .catch((error) => console.log('error loginGoogle:', error));
  }

  ingresarFacebook() {
    console.log('login con facebook');
  }

  ngOnInit() {
    if (this.authService.checkLocalStorage()) {
      // si hay usuario en el localStorage va directo a la ruta

      this.router.navigate(['admin/productos']);
    }
    //this.ingresarGoogle();
    this.messageValidators = this.fb.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
