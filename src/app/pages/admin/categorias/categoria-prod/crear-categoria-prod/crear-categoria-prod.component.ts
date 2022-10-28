import { Component, Inject, OnInit } from '@angular/core';

import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AbmCategoriasProdService } from '../../../../../services/abm-categorias-prod.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-crear-categoria-prod',
  templateUrl: './crear-categoria-prod.component.html',
  styleUrls: ['./crear-categoria-prod.component.css'],
})
export class CrearCategoriaProdComponent implements OnInit {
  hide = true;
  messageValidators!: UntypedFormGroup;
  botonHabilitado: boolean = false;

  constructor(
    public fb: UntypedFormBuilder, // se usa para crear la validaciones
    private router: Router, // private formControl: FormControl
    private abmCategoriasProdService: AbmCategoriasProdService,
    public dialog: MatDialog
  ) {}

  formCrearCategoriaProd = this.fb.group({
    agExtintor: ['', [Validators.required]],
    clase: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    fuegos: ['', [Validators.required]],
    aplicativos: ['', [Validators.required]],
  });

  crearCategoriaProd() {
    if (this.formCrearCategoriaProd.valid) {
      this.botonHabilitado = this.formCrearCategoriaProd.valid;
      console.log('formulario valido desde algular: ', this.botonHabilitado);
      this.abmCategoriasProdService
        .crearCategoria(this.formCrearCategoriaProd.value)
        .subscribe(
          (data: any) => {
            console.log("Categoria agrehada:",data);
          },

          (err) => {
            console.log(err);
          }

        );
        this.formCrearCategoriaProd.reset();

    } else !this.formCrearCategoriaProd.valid;
    this.botonHabilitado = this.formCrearCategoriaProd.valid;
    console.log('formulario valido desde algular: ', this.botonHabilitado);
  }

  ngOnInit(): void {
    this.messageValidators = this.fb.group({
      agExtintor: ['', [Validators.required]],
      clase: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      fuegos: ['', [Validators.required]],
      aplicativos: ['', [Validators.required]],
    });
    console.log(
      'this.formCrearCategoriaProd.valid:',
      this.formCrearCategoriaProd.valid
    );
  }
}
