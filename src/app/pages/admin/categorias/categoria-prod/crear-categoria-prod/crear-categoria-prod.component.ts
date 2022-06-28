import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbmCategoriasProdService } from '../../../../../services/abm-categorias-prod.service';

@Component({
  selector: 'app-crear-categoria-prod',
  templateUrl: './crear-categoria-prod.component.html',
  styleUrls: ['./crear-categoria-prod.component.css'],
})
export class CrearCategoriaProdComponent implements OnInit {
  hide = true;
  messageValidators!: UntypedFormGroup;

  constructor(
    public fb: UntypedFormBuilder, // se usa para crear la validaciones
    private router: Router, // private formControl: FormControl
    private abmCategoriasProdService: AbmCategoriasProdService
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
      const value = this.formCrearCategoriaProd.valid;
      console.log('formulario valido desde algular: ', value);
      this.abmCategoriasProdService
        .crearCategoria(this.formCrearCategoriaProd.value)
        .subscribe(
          (data: any) => {
            console.log(data);
            this.formCrearCategoriaProd.reset();
          },
          (err) => {
            console.log(err);
          }
        );
    } else !this.formCrearCategoriaProd.valid;
    const value = this.formCrearCategoriaProd.valid;
    console.log('formulario valido desde algular: ', value);
  }

  ngOnInit(): void {
    this.messageValidators = this.fb.group({
      agExtintor: ['', [Validators.required]],
      clase: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      fuegos: ['', [Validators.required]],
      aplicativos: ['', [Validators.required]],
    });
  }
}
