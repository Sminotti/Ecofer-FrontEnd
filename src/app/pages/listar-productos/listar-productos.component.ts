import { Component, HostBinding, OnInit } from '@angular/core';
import { AbmProductosService } from '../../services/abm-productos.service';
import { Producto } from '../../model/Iproductos';
import { HandlerImageService } from '../../services/handler-image.service';
import { CatProducto } from 'src/app/model/IcatProd';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css'],
})
export class ListarProductosComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  // creo un arreglo para que se almacenen todos aca
  arrayProductos: Producto[] = [];
  arrayCatProductos: CatProducto[] = [];
  arrayPordFiltrados: Producto[] = [];
  categorias: string[] = [];

  // inicializo el objeto
  // producto: Producto []= [{
  //   idProducto: 0,
  //   unidadesProducto: 0,
  //   nombre: '',
  //   observacionesProd: '',
  //   idCategoria: 0,
  //   idProveedor: 0,
  //   kilosProducto: 0,
  //   precioVenta: 0,
  //   precioCosto: 0,
  //   numeroSerie: '',
  //   imagenProducto:'' ,
  //   //categoriaProductos
  //   agenteExtintor: '',
  //   claseProducto: '',
  //   fuegos: '',
  //   descripcion: '',
  //   aplicativos: '',
  //   //Proveedores
  //   nombreFantasia: '',
  //   contactoProv: '',
  //   telefonoProv: '',
  // }];

  constructor(
    private abmProductosService: AbmProductosService,
    private handlerImageService: HandlerImageService
  ) {}

  imagenPrevia: any;

  onFileChange(event: any) {
    const imagen = event.target.files[0];
    console.log('imagen:', imagen);

    this.handlerImageService.extraerBase64(imagen).then((res: any) => {
      this.imagenPrevia = res.base;
      console.log('imagenPrevia: conertida a Base64');
    });
  }

  // traigo a la funcion listarProductos del service
  listarProductos() {
    this.abmProductosService.listarProductos().subscribe(
      (res) => {
        this.arrayProductos = res;
        console.log('listando productos:', this.arrayProductos);
        //intercepto los datos que entran a este link
        // this.abmProductosService.verificarInterceptor().subscribe((resp) => {
        //   console.log('interceptor: ', resp);
        // });
      },
      (err) => console.log('Error page listarProductos:', err)
    );
  }

  chequed(categoria: any) {
    // se ejecuta cuando haces click en el checkBox
    console.log('clase seleccionada fuera del try:', categoria);
    // try {
    //   this.abmProductosService
    //     .filtrarPorCategoria(categoria)
    //     .subscribe((res: any) => {
    //       // res no trae nada ------------------------------->  OJO VER ACA!!!
    //       console.log('selecciono', res);

    //     });
    // } catch (error) {
    //   console.log('error', error);
    // }
  }

  ngOnInit(): void {
    this.listarProductos(); // Listo todos los productos
    //this.listarCategoria(); // Listo todas las categorias
    //this.chequed(this.idCategoria);
  }
}
