import { Component, Inject, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  UntypedFormControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CatProducto } from '../../../../../model/IcatProd';
import { AbmCategoriasProdService } from '../../../../../services/abm-categorias-prod.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-categoria-prod',
  templateUrl: './editar-categoria-prod.component.html',
  styleUrls: ['./editar-categoria-prod.component.css'],
})
export class EditarCategoriaProdComponent implements OnInit {
  hide = true;
  botonHabilitado: boolean = false;

  categoriaProducto: CatProducto | any = {
    id: 0,
    agExtintor: '',
    clase: '',
    descripcion: '',
    fuegos: '',
    aplicativos: '',
  };

  formActualizarCatProd = new UntypedFormGroup({
    id: new UntypedFormControl(''),
    agExtintor: new UntypedFormControl(''),
    clase: new UntypedFormControl(''),
    descripcion: new UntypedFormControl(''),
    fuegos: new UntypedFormControl(''),
    aplicativos: new UntypedFormControl(''),
  });

  alerta: string = '';

  constructor(
    private abmCategoriasProdService: AbmCategoriasProdService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public fb: UntypedFormBuilder, // se usa para crear la validaciones
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public id: any
  ) {}

  params = this.activatedRoute.snapshot.params; // tomo el id de params

  listarCategoriaProd() {
    this.abmCategoriasProdService.listarCategoria(this.id).subscribe(
      (res) => {
        this.categoriaProducto = res;
        this.formActualizarCatProd.setValue({
          id: this.categoriaProducto.id,
          agExtintor: this.categoriaProducto.agExtintor,
          clase: this.categoriaProducto.clase,
          descripcion: this.categoriaProducto.descripcion,
          fuegos: this.categoriaProducto.fuegos,
          aplicativos: this.categoriaProducto.aplicativos,
        });
      },
      (err) => console.log(err)
    );
  }

  actualizarCategoriaProd(datosDelForm: CatProducto) {
    this.alerta = 'La categoria se actualizo con exito';
    this.abmCategoriasProdService
      // .actualizarCategoria(this.params.id, datosDelForm)
      .actualizarCategoria(this.id, datosDelForm)
      .subscribe(
        (res) => {
          console.log('datos del form:', datosDelForm);
          // this.router.navigate(['/admin/categorias/categoria-prod']);
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
    this.listarCategoriaProd();
  }
}
