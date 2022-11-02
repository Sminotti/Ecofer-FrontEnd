import { Component, Inject, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
  UntypedFormControl,
} from '@angular/forms';
import { AbmProveedoresService } from '../../../../services/abm-proveedores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedores } from '../../../../model/Iproveedores';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-proveedores',
  templateUrl: './editar-proveedores.component.html',
  styleUrls: ['./editar-proveedores.component.css'],
})
export class EditarProveedoresComponent implements OnInit {
  hide = true;
  botonHabilitado: boolean = false;

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


  alerta: string = '';

  constructor(
    private abmProveedoresService: AbmProveedoresService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public fb: UntypedFormBuilder, // se usa para crear la validaciones
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public id: any
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
    this.alerta = 'El producto fue actualizado con exito';
    this.abmProveedoresService
      .actualizarProveedor(this.id, datosDelForm)
      .subscribe(
        (res) => {
          console.log("datos del form:",datosDelForm);
          this.openMessage(this.alerta);

        },
        (err) => console.log(err)
      );


  }
// funcion de mensaje de alerta
openMessage(message: string) {
  this._snackBar.open(message, '', { duration: 2000 });
}
  ngOnInit(): void {
    this.listarProveedor();
  }
}
