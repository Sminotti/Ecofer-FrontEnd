import { Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  FormBuilder,
  Validators,
  UntypedFormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatInput } from '@angular/material/input';
// -------------------------INTERFACES-----------------------------
import { CatProducto } from '../../../../model/IcatProd';
// import { Producto } from '../../../../Iproductos';
import { Proveedores } from '../../../../model/Iproveedores';
import { Imagen } from '../../../../model/Ifile';
// -----------------------------servicios----------------------------
import { AbmCategoriasProdService } from '../../../../services/abm-categorias-prod.service';
import { AbmProveedoresService } from '../../../../services/abm-proveedores.service';
import { AbmProductosService } from '../../../../services/abm-productos.service';
import { HandlerImageService } from '../../../../services/handler-image.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css'],
})
export class CrearProductoComponent implements OnInit {
  hide = true;

  constructor(
    private abmProductosService: AbmProductosService,
    private abmProveedoresService: AbmProveedoresService,
    private abmCategoriasProdService: AbmCategoriasProdService,
    private handlerImageService: HandlerImageService,
    private router: Router
  ) {}

  file: any = [];
  imagenPrevia: any;
  filename: string = '';
  arrayCrearProductos: any[] = [];
  arrayCatProductos: CatProducto[] = [];
  arrayProveedores: Proveedores[] = [];
  imagenDefault: any = '../../../assets/images/subir-archivo.png';

  formCrearProducto = new UntypedFormGroup({
    // formCrearProducto = this.fb.group({
    nombre: new UntypedFormControl(null, Validators.required),
    idCategoria: new UntypedFormControl(null, Validators.required),
    idProveedor: new UntypedFormControl(null, Validators.required),
    kilos: new UntypedFormControl(null, Validators.required),
    numeroSerie: new UntypedFormControl(null, Validators.required),
    observacionesProd: new UntypedFormControl(null, Validators.required),
    precioCosto: new UntypedFormControl(null, Validators.required),
    precioVenta: new UntypedFormControl(null, Validators.required),
    unidades: new UntypedFormControl(null, Validators.required),
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
      console.log('ha superado en tamaño permitido');
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

  crearProducto(): void {
    try {
      if (this.formCrearProducto.valid) {
        const formDatos = new FormData();
        formDatos.append('nombre', this.formCrearProducto.get('nombre')?.value);
        formDatos.append(
          'idCategoria',
          this.formCrearProducto.get('idCategoria')?.value
        );
        formDatos.append(
          'unidades',
          this.formCrearProducto.get('unidades')?.value
        );
        formDatos.append('kilos', this.formCrearProducto.get('kilos')?.value);
        formDatos.append(
          'numeroSerie',
          this.formCrearProducto.get('numeroSerie')?.value
        );
        formDatos.append(
          'precioCosto',
          this.formCrearProducto.get('precioCosto')?.value
        );
        formDatos.append(
          'precioVenta',
          this.formCrearProducto.get('precioVenta')?.value
        );
        formDatos.append(
          'idProveedor',
          this.formCrearProducto.get('idProveedor')?.value
        );
        formDatos.append(
          'observacionesProd',
          this.formCrearProducto.get('observacionesProd')?.value
        );
        formDatos.append('uid', this.file);

        //llamo al servio y creo el producto
        this.abmProductosService.crearProducto(formDatos).subscribe(
          (data) => {
            console.log('DATOS CARGADOS: ', data);
            alert('producto creado exitosamente');
            //  this.formCrearProducto.reset();
            this.router.navigate(['admin/productos']);
          },
          (err) => {
            console.log(err);
          }
        );
      } else !this.formCrearProducto.valid;
      const value = this.formCrearProducto.valid;
      console.log('formulario valido desde algular: ', value);
    } catch (error) {
      console.log('ERROR:', error);
    }
  }

  listarCategoria() {
    this.abmCategoriasProdService.listarCategorias().subscribe((res) => {
      console.log(res);
      this.arrayCatProductos = res;
    });
  }

  listarProveedores() {
    this.abmProveedoresService.listarProveedores().subscribe((res) => {
      console.log(res);
      this.arrayProveedores = res;
    });
  }

  ngOnInit(): void {
    this.listarCategoria();
    this.listarProveedores();
    this.formCrearProducto = new UntypedFormGroup({
      // formCrearProducto = this.fb.group({
      nombre: new UntypedFormControl(null, Validators.required),
      idCategoria: new UntypedFormControl(null, Validators.required),
      idProveedor: new UntypedFormControl(null, Validators.required),
      kilos: new UntypedFormControl(null, Validators.required),
      numeroSerie: new UntypedFormControl(null, Validators.required),
      observacionesProd: new UntypedFormControl(null, Validators.required),
      precioCosto: new UntypedFormControl(null, Validators.required),
      precioVenta: new UntypedFormControl(null, Validators.required),
      unidades: new UntypedFormControl(null, Validators.required),
      uid: new UntypedFormControl(null, Validators.required),
    });
  }
}
