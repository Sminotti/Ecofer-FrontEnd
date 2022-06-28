import { Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
  UntypedFormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  hide = true;
  messageValidators!: UntypedFormGroup;

  constructor(
    public fb: UntypedFormBuilder, // se usa para crear la validaciones
    private contatoService: ContactoService,
    private router: Router // private formControl: FormControl
  ) {}

  formContacto = new UntypedFormGroup({
    empresa: new UntypedFormControl(null, Validators.required),
    nombreContacto: new UntypedFormControl(null, [
      Validators.required,
      Validators.pattern(/^([A-Z]|[a-z])+$/),
    ]),
    apellidoContacto: new UntypedFormControl(null, [
      Validators.required,
      Validators.pattern(/^([A-Z]|[a-z])+$/),
    ]),
    emailContacto: new UntypedFormControl(null, [
      Validators.required,
      Validators.email,
    ]),
    telContacto: new UntypedFormControl(
      null,
      Validators.pattern(/^((15|11|5415|5411)?\d{8})$/)
    ),
    message: new UntypedFormControl(null, Validators.required),
    localidad: new UntypedFormControl(null, Validators.required),
    barrio: new UntypedFormControl(null, Validators.required),
    codigoPostal: new UntypedFormControl(null, Validators.required),
  });

  sendMail() {
    if (this.formContacto.valid) {
      const value = this.formContacto.valid;
      console.log('formulario valido desde algular: ', value);
      this.contatoService.enviarMail(this.formContacto.value).subscribe(
        (res) => {
          console.log(res);
          this.formContacto.reset();
        },
        (err) => {
          console.log(err);
        }
      );
    } else !this.formContacto.valid;
    const value = this.formContacto.valid;
    console.log('formulario valido desde algular: ', value);
  }

  ngOnInit(): void {
    this.messageValidators = this.fb.group({
      empresa: new UntypedFormControl(null, Validators.required),
      nombreContacto: new UntypedFormControl(null, [
        Validators.required,
        Validators.pattern(/^([A-Z]|[a-z])+$/),
      ]),
      apellidoContacto: new UntypedFormControl(null, [
        Validators.required,
        Validators.pattern(/^([A-Z]|[a-z])+$/),
      ]),
      emailContacto: new UntypedFormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      telContacto: new UntypedFormControl(
        null,
        Validators.pattern(/^((15|11|5415|5411)?\d{8})$/)
      ),
      message: new UntypedFormControl(null, Validators.required),
      localidad: new UntypedFormControl(null, Validators.required),
      barrio: new UntypedFormControl(null, Validators.required),
      codigoPostal: new UntypedFormControl(null, Validators.required),
    });
  }
}
