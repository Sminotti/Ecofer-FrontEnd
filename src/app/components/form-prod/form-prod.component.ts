import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../model/Iproductos';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
  UntypedFormControl,
} from '@angular/forms';
import { HandlerImageService } from '../../services/handler-image.service';
//Servicios
import { AbmProductosService } from '../../services/abm-productos.service'; //importo el servicio
import { AbmProveedoresService } from 'src/app/services/abm-proveedores.service';
import { AbmCategoriasProdService } from 'src/app/services/abm-categorias-prod.service';

@Component({
  selector: 'app-form-prod',
  templateUrl: './form-prod.component.html',
  styleUrls: ['./form-prod.component.css'],
})
export class FormProdComponent implements OnInit {
  // @HostBinding('class') classes = 'row';
  disableSelect = new UntypedFormControl(false);
  hide = true;
  imagenPrevia: any;

  // inicializo el objeto
  producto: Producto = {
    idProducto: 0,
    unidadesProducto: 0,
    nombre: '',
    observacionesProd: '',
    idCategoria: 0,
    idProveedor: 0,
    kilosProducto: 0,
    precioVenta: 0,
    precioCosto: 0,
    numeroSerie: '',
    imagenProducto:'' ,
    //categoriaProductos
    agenteExtintor: '',
    claseProducto: '',
    fuegos: '',
    descripcion: '',
    aplicativos: '',
    //Proveedores
    nombreFantasia: '',
    contactoProv: '',
    telefonoProv: '',
  };
  messageValidators!: UntypedFormGroup;
  detalleProducto: UntypedFormGroup;

  // en el constructor creo las variables
  constructor(
    private abmProductosService: AbmProductosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public fb: UntypedFormBuilder, // se usa para crear la validaciones
  ) {
    this.detalleProducto = this.fb.group({
      nombreProducto: [''],
      unidadesProducto: [''],
      observacionesProd: [''],
      kilosProducto: [''],
      precioVenta: [''],
      precioCosto: [''],
      imagenProducto: [''],
      numeroSerie:[''],
      //Proveedor
      nombreFantasia: [''],
      contactoProv: [''],
      telefonoProv: [''],
      //CategoriaProducto
      aplicativos: [''],
      claseProducto: [''],
      fuegos: [''],
      descripcion: [''],
      agenteExtintor: [''],
    });
  }

  params = this.activatedRoute.snapshot.params; // tomo el id de params

  listarProducto() {
    // pregunto: si params trae el id ...
    this.abmProductosService.listarProducto(this.params.id).subscribe(
      (res) => {
        console.log('datos del producto: ', res);
        this.producto = res; // lleno el objeto producto con la res
      },
      (err) => console.log(err)
    );
  }

  // llamo a la funcion que muestra todos los datos al inicio del componente
  ngOnInit(): void {
    this.listarProducto();
  }
}
