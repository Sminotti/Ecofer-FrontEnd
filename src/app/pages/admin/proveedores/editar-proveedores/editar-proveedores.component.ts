import { Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
  UntypedFormControl,
} from '@angular/forms';
import { AbmProveedoresService } from '../../../../services/abm-proveedores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedores } from '../../../../model/Iproveedores';

@Component({
  selector: 'app-editar-proveedores',
  templateUrl: './editar-proveedores.component.html',
  styleUrls: ['./editar-proveedores.component.css'],
})
export class EditarProveedoresComponent implements OnInit {
  hide = true;

  proveedor: Proveedores | any = {
    id: 0,
    razonSocial: '',
    nombreFantasia: '',
    contacto: '',
    direccion: '',
    codPostal: '',
    cuil: '',
    telefono: '',
    localidad: '',
    observacionesProv: '',
  };

  messageValidators!: UntypedFormGroup;
  formActualizarProveedor = new UntypedFormGroup({
    id: new UntypedFormControl(''),
    razonSocial: new UntypedFormControl(''),
    nombreFantasia: new UntypedFormControl(''),
    contacto: new UntypedFormControl(''),
    direccion: new UntypedFormControl(''),
    codPostal: new UntypedFormControl(''),
    cuil: new UntypedFormControl(''),
    telefono: new UntypedFormControl(''),
    localidad: new UntypedFormControl(''),
    observacionesProv: new UntypedFormControl(''),
  });

  constructor(
    private abmProveedoresService: AbmProveedoresService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public fb: UntypedFormBuilder // se usa para crear la validaciones
  ) {}

  params = this.activatedRoute.snapshot.params; // tomo el id de params

  listarProveedor() {
    this.abmProveedoresService.listarProveedor(this.params.id).subscribe(
      (res) => {
        this.proveedor = res;
        this.formActualizarProveedor.setValue({
          id: this.proveedor.id,
          razonSocial: this.proveedor.razonSocial,
          nombreFantasia: this.proveedor.nombreFantasia,
          contacto: this.proveedor.contacto,
          direccion: this.proveedor.direccion,
          codPostal: this.proveedor.codPostal,
          cuil: this.proveedor.cuil,
          telefono: this.proveedor.telefono,
          localidad: this.proveedor.localidad,
          observacionesProv: this.proveedor.observacionesProv,
        });
      },
      (err) => console.log(err)
    );
  }

  actualizarProveedor(datosDelForm: Proveedores) {
    this.abmProveedoresService
      .actualizarProveedor(this.params.id, datosDelForm)
      .subscribe(
        (res) => {
          console.log("datos del form:",datosDelForm);
          this.router.navigate(['admin/proveedores']);
        },
        (err) => console.log(err)
      );

  }

  ngOnInit(): void {
    this.listarProveedor();
  }
}
