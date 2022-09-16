import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
  UntypedFormControl,
} from '@angular/forms';
import { Observable } from 'rxjs';
//--------------------------------SERVICIOS---------------------------------------------
import { AbmProductosService } from '../../../../services/abm-productos.service'; //importo el servicio
import { AbmProveedoresService } from '../../../../services/abm-proveedores.service';
import { AbmCategoriasProdService } from '../../../../services/abm-categorias-prod.service';
import { HandlerImageService } from '../../../../services/handler-image.service';
// -------------------------------INTERFACES--------------------------------------------
import { Producto } from '../../../../model/Iproductos';
import { CatProducto } from '../../../../model/IcatProd';
import { Proveedores } from '../../../../model/Iproveedores';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css'],
})
export class EditarProductoComponent implements OnInit {
  // @HostBinding('class') classes = 'row';
  panelOpenState = false;

  hide = true;
  file: any = [];
  imagenPrevia: any;
  filename: string = '';

  // inicializo el objeto
  producto: Producto | any = {
    //idProducto: 0,
    unidades: 0,
    nombre: '',
    observacionesProd: '',
    //idCategoria: 0,
    //idProveedor: 0,
    kilos: 0,
    precioVenta: 0,
    precioCosto: 0,
    numeroSerie: '',
    uid: '',
  };
  categoriaProd: CatProducto | any = {
    // id: 0,
    agExtintor: '',
    clase: '',
    descripcion: '',
    fuegos: '',
    aplicativos: '',
  };

  proveedor: Proveedores | any = {
    //  id: 0,
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

  formActualizarProducto = new UntypedFormGroup({
    //idProducto: new FormControl(''),
    uid: new UntypedFormControl(''),
    nombre: new UntypedFormControl(''),
    idCategoria: new UntypedFormControl(''),
    idProveedor: new UntypedFormControl(''),
    kilos: new UntypedFormControl(''),
    numeroSerie: new UntypedFormControl(''),
    observacionesProd: new UntypedFormControl(''),
    precioCosto: new UntypedFormControl(''),
    precioVenta: new UntypedFormControl(''),
    unidades: new UntypedFormControl(''),
    imagenProducto: new UntypedFormControl(''),
    borrarImagenAnterior: new UntypedFormControl(''),
  });

  // en el constructor creo las variables
  constructor(
    private abmProductosService: AbmProductosService,
    private abmProveedoresService: AbmProveedoresService,
    private abmCategoriasProdService: AbmCategoriasProdService,
    private handlerImageService: HandlerImageService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public fb: UntypedFormBuilder // se usa para crear la validaciones
  ) {}

  arrayCatProductos: CatProducto[] = [];
  arrayProveedores: Proveedores[] = [];
  params = this.activatedRoute.snapshot.params; // tomo el id de params
  id_Producto = this.params.id; // capturo el id del producto a editar
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

  listarCategoria() {// Lista todas las categorias
    this.abmCategoriasProdService.listarCategorias().subscribe((res) => {
      console.log('arrayCategorias', res);
      this.arrayCatProductos = res;
    });
  }

  categoriaSelected(id:string) { // Lista solo La que selecciono en el select de categorias
    this.abmCategoriasProdService.listarCategoria(id).subscribe((res) => {
      console.log('Categoria seleccionada:', res);
      this.categoriaProd = res;
    });
  }

  listarProveedores() {
    this.abmProveedoresService.listarProveedores().subscribe((res) => {
      console.log('arrayProveedores', res);
      this.arrayProveedores = res;
    });
  }

  listarProductoActualizar() {
    this.abmProductosService.listarProductoUpdate(this.params.id).subscribe(
      (res) => {
        this.producto = res;
        console.log('producto:', res);

        // this.formActualizarProducto.controls['idProducto']?.setValue(
        //   this.producto.idProducto
        // );
        this.formActualizarProducto.controls['uid']?.setValue(this.file);
        this.formActualizarProducto.controls['nombre']?.setValue(
          this.producto.nombreProducto
        );
        this.formActualizarProducto.controls['idCategoria']?.setValue(
          this.categoriaProd.id
        );
        this.formActualizarProducto.controls['idProveedor']?.setValue(
          this.proveedor.id
        );
        this.formActualizarProducto.controls['kilos']?.setValue(
          this.producto.kilosProducto
        );
        this.formActualizarProducto.controls['numeroSerie']?.setValue(
          this.producto.numeroSerie
        );
        this.formActualizarProducto.controls['observacionesProd']?.setValue(
          this.producto.observacionesProd
        );
        this.formActualizarProducto.controls['observacionesProv']?.setValue(
          this.producto.observacionesProv
        );
        this.formActualizarProducto.controls['precioCosto']?.setValue(
          this.producto.precioCosto
        );
        this.formActualizarProducto.controls['unidades']?.setValue(
          this.producto.unidadesProducto
        );
        this.formActualizarProducto.controls['borrarImagenAnterior']?.setValue(
          this.producto.idCloudinary
        );
      },
      (err) => console.log(err)
    );
  }

  actualizarProducto() {
    delete this.producto.idProducto;

    const formDatos = new FormData();
    formDatos.set('nombre', this.formActualizarProducto.get('nombre')?.value);
    formDatos.set(
      'idCategoria',
      this.formActualizarProducto.get('idCategoria')?.value
    );
    formDatos.set(
      'unidades',
      this.formActualizarProducto.get('unidades')?.value
    );
    formDatos.set('kilos', this.formActualizarProducto.get('kilos')?.value);
    formDatos.set(
      'numeroSerie',
      this.formActualizarProducto.get('numeroSerie')?.value
    );
    formDatos.set(
      'precioCosto',
      this.formActualizarProducto.get('precioCosto')?.value
    );
    formDatos.set(
      'precioVenta',
      this.formActualizarProducto.get('precioVenta')?.value
    );
    formDatos.set(
      'idProveedor',
      this.formActualizarProducto.get('idProveedor')?.value
    );
    formDatos.set(
      'observacionesProd',
      this.formActualizarProducto.get('observacionesProd')?.value
    );
    formDatos.set(
      'idCloudinary',
      this.formActualizarProducto.get('borrarImagenAnterior')?.value
    );
    formDatos.set('uid', this.file);

    this.abmProductosService
      .actualizarProducto(this.params.id, formDatos)
      .subscribe(
        (res) => {
          alert('producto actualizado exitosamente');
          this.router.navigate(['admin/productos']);
        },
        (err) => console.log(err)
      );
  }

  ngOnInit(): void {
    this.listarProductoActualizar();
    this.listarProveedores();
    this.listarCategoria();
  }
}
