import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  UntypedFormControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CatProducto } from '../../../../../model/IcatProd';
import { AbmCategoriasProdService } from '../../../../../services/abm-categorias-prod.service';

@Component({
  selector: 'app-editar-categoria-prod',
  templateUrl: './editar-categoria-prod.component.html',
  styleUrls: ['./editar-categoria-prod.component.css'],
})
export class EditarCategoriaProdComponent implements OnInit {
  hide = true;

  categoriaProducto: CatProducto | any= {
    id: 0,
    agExtintor: '',
    clase: '',
    descripcion: '',
    fuegos: '',
    aplicativos: '',
  };

  messageValidators!: UntypedFormGroup;

  formActualizarCatProd = new UntypedFormGroup({
    id: new UntypedFormControl(''),
    agExtintor: new UntypedFormControl(''),
    clase: new UntypedFormControl(''),
    descripcion: new UntypedFormControl(''),
    fuegos: new UntypedFormControl(''),
    aplicativos: new UntypedFormControl(''),
  });

  constructor(
    private abmCategoriasProdService: AbmCategoriasProdService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public fb: UntypedFormBuilder // se usa para crear la validaciones
  ) {}

  params = this.activatedRoute.snapshot.params; // tomo el id de params

  listarCategoriaProd() {
    this.abmCategoriasProdService.listarCategoria(this.params.id).subscribe(
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
    this.abmCategoriasProdService
      .actualizarCategoria(this.params.id, datosDelForm)
      .subscribe(
        (res) => {
          console.log("datos del form:",datosDelForm);
          this.router.navigate(['/admin/categorias/categoria-prod']);
        },
        (err) => console.log(err)
      );
  }

  ngOnInit(): void {
    this.listarCategoriaProd();
  }
}
