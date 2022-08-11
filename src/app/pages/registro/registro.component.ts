import { Component, HostBinding, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  FormBuilder,
  Validators,
  UntypedFormControl,
} from '@angular/forms';
import { RegistroUsuariosService } from '../../services/registro-usuarios.service';
import { Router } from '@angular/router';
import { RegistroUsuario } from '../../model/IregistroUsuario';
import { HandlerImageService } from '../../services/handler-image.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  //  @HostBinding('class') classes = 'row';

  hide = true;
  messageValidators!: UntypedFormGroup;
  file: any = [];
  imagenPrevia: any;
  filename: string = '';

  constructor(

    private registroService: RegistroUsuariosService,
    private router: Router, // private formControl: FormControl
    private handlerImageService: HandlerImageService
  ) {}

  formRegistro = new UntypedFormGroup({
    razonSocial: new UntypedFormControl(null),
    nombreFantasia: new UntypedFormControl(null),
    cuitCuil: new UntypedFormControl(null, Validators.required),
    apellido: new UntypedFormControl(null, Validators.required),
    nombre: new UntypedFormControl(null, Validators.required),
    dni: new UntypedFormControl(null, [Validators.required,Validators.minLength(7),Validators.maxLength(8)]),
    codPostal: new UntypedFormControl(null, [Validators.required,Validators.minLength(4),Validators.maxLength(4)]),
    direccion: new UntypedFormControl(null, Validators.required),
    mail: new UntypedFormControl(null, [Validators.required,Validators.email]),
    telefono: new UntypedFormControl(null, Validators.required),
    usuario: new UntypedFormControl(null, Validators.required),
    password: new UntypedFormControl(null, Validators.required),
    uid: new UntypedFormControl(null, Validators.required),
  });

  // ---------------------------VALIDACIONES---------------------------------------------//

  private validarFile(event: any): Boolean {
    const maxSize = 1000000;
    this.file = event.target.files;
    this.filename = event.target.files[0].name;

    console.log(this.file);

    if (this.file.length <= 0) {
      console.log('no se adjunto imagen');
      this.filename = 'no hay imagen';
      this.file = [];
      return false;
    }

    if (this.file[0].size > maxSize) {
      console.log('ha superado el tamaño permitido');
      this.file = [];
      return false;
    }

    return true;
  }
  // ---------------------------VALIDACIONES----------------------------------------//

  onFileChange(event: any) {
    const validacion = this.validarFile(event);
    const imagen = event.target.files[0];
    console.log('imagen:', imagen);

    console.log('Si es una imagen');

    this.handlerImageService.extraerBase64(imagen).then((res: any) => {
      this.imagenPrevia = res.base;
      console.log('imagenPrevia:', this.imagenPrevia);
    });

    console.log('validacion', validacion);

    if (validacion) {
      this.file = imagen;
    } else {
      return console.log('no hay imagen');
    }
  }

  registrarse() {
    try {
      if (this.formRegistro.valid) {
        const value = this.formRegistro.valid;

        const datosRegistro = new FormData();
        datosRegistro.append(
          'razonSocial',
          this.formRegistro.get('razonSocial')?.value
        );
        datosRegistro.append(
          'nombreFantasia',
          this.formRegistro.get('nombreFantasia')?.value
        );
        datosRegistro.append(
          'cuitCuil',
          this.formRegistro.get('cuitCuil')?.value
        );
        datosRegistro.append(
          'apellido',
          this.formRegistro.get('apellido')?.value
        );
        datosRegistro.append(
          'nombre',
        this.formRegistro.get('nombre')?.value
        );
        datosRegistro.append(
          'dni',
        this.formRegistro.get('dni')?.value
        );
        datosRegistro.append(
          'codPostal',
          this.formRegistro.get('codPostal')?.value
        );
        datosRegistro.append(
          'direccion',
          this.formRegistro.get('direccion')?.value
        );
        datosRegistro.append(
          'mail',
          this.formRegistro.get('mail')?.value);
        datosRegistro.append(
          'telefono',
          this.formRegistro.get('telefono')?.value
        );
        datosRegistro.append(
          'usuario',
          this.formRegistro.get('usuario')?.value
        );
        datosRegistro.append(
          'password',
          this.formRegistro.get('password')?.value
        );
        datosRegistro.append('uid', this.file);
//----------------------------------ACTUAL-----------------------------------------------------//
this.registroService.registroUsuario(datosRegistro)
.subscribe
({
  next: (dataRegistro) => {
    alert("Te registraste correctamente,se envio un mail a tu casilla para activar tu cuenta.");
    console.log('datos del registro', dataRegistro);
    this.router.navigate(['']);
},
  error: (error) => console.log(error),

})
//-----------------------DEPRECATE-------------------------------------------------------------//
        // this.registroService.registroUsuario(datosRegistro)
        // .subscribe(
        //   (dataRegistro?: any) => { alert("Te registraste correctamente,se envio un mail a tu casilla para activar tu cuenta.");
        //     console.log('datos del registro', dataRegistro);
        //     // this.formRegistro.reset();
        //     this.router.navigate(['']);
        //   },

        //   (err) => {
        //     console.log(err);
        //   }
        // );
      } else !this.formRegistro.valid;
      const value = this.formRegistro.valid;
      console.log('formulario valido desde algular: ', value);
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.formRegistro = new UntypedFormGroup({
      razonSocial: new UntypedFormControl(null),
      nombreFantasia: new UntypedFormControl(null),
      cuitCuil: new UntypedFormControl(null, Validators.required),
      apellido: new UntypedFormControl(null, Validators.required),
      nombre: new UntypedFormControl(null, Validators.required),
      dni: new UntypedFormControl(null, Validators.required),
      codPostal: new UntypedFormControl(null, Validators.required),
      direccion: new UntypedFormControl(null, Validators.required),
      mail: new UntypedFormControl(null, Validators.required),
      telefono: new UntypedFormControl(null, Validators.required),
      usuario: new UntypedFormControl(null, Validators.required),
      password: new UntypedFormControl(null, Validators.required),
      uid: new UntypedFormControl(null, Validators.required),
    });
  }
}
