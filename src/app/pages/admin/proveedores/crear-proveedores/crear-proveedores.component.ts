import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbmProveedoresService } from '../../../../services/abm-proveedores.service';

@Component({
  selector: 'app-crear-proveedores',
  templateUrl: './crear-proveedores.component.html',
  styleUrls: ['./crear-proveedores.component.css'],
})
export class CrearProveedoresComponent implements OnInit {
  hide = true;
  messageValidators!: UntypedFormGroup;

  constructor(
    public fb: UntypedFormBuilder, // se usa para crear la validaciones
    private abmProveedoresService: AbmProveedoresService,
    private router: Router // private formControl: FormControl
  ) {}

  formCrearProveedor = this.fb.group({
    razonSocial: ['', [Validators.required]],
    nombreFantasia: ['', [Validators.required]],
    cuil: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    localidad: ['', [Validators.required]],
    codPostal: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    contacto: ['', [Validators.required]],
    observacionesProv: ['', [Validators.required]],
  });

  crearProveedor() {
    if (this.formCrearProveedor.valid) {
      const value = this.formCrearProveedor.valid;
      console.log('formulario valido desde algular: ', value);
      this.abmProveedoresService
        .crearProveedor(this.formCrearProveedor.value)
        .subscribe(
          (data) => {
            console.log('datos del registro', data);
                this.formCrearProveedor.reset();
                this.router.navigate(['admin/proveedores/crear-proveedores']);
          },
          (err) => {
            console.log(err);
          }
        );
    } else !this.formCrearProveedor.valid;
    const value = this.formCrearProveedor.valid;
    console.log('formulario valido desde algular: ', value);
  }

  ngOnInit(): void {
    this.messageValidators = this.fb.group({
      razonSocial: ['', [Validators.required]],
      nombreFantasia: ['', [Validators.required]],
      cuil: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      localidad: ['', [Validators.required]],
      codPostal: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      contacto: ['', [Validators.required]],
      observacionesProv: ['', [Validators.required]],
    });
  }
}
