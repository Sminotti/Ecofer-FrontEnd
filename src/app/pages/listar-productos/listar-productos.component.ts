import { Component, HostBinding, OnInit } from '@angular/core';
import { AbmProductosService } from '../../services/abm-productos.service';
import { AbmCategoriasProdService } from 'src/app/services/abm-categorias-prod.service';
import { Producto } from '../../model/Iproductos';
import { HandlerImageService } from '../../services/handler-image.service';
import { FormBuilder } from '@angular/forms';
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
  claseSeleccionada: CatProducto = {
    clase: '',
  };

  constructor(
    private _formBuilder: FormBuilder,
    private abmProductosService: AbmProductosService,
    private handlerImageService: HandlerImageService,
    private abmCategoriasProdService: AbmCategoriasProdService
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
        this.abmProductosService.verificarInterceptor().subscribe((resp) => {
          console.log('interceptor: ', resp);
        });
      },
      (err) => console.log('Error page listarProductos:', err)
    );
  }

  listarCategoria() {
    // Lista todas las categorias
    this.abmCategoriasProdService.listarCategorias().subscribe(
      (res) => {
        console.log('arrayCategorias', res);
        this.arrayCatProductos = res;
      },
      (err) => console.log('Error page listarCategoria:', err)
    );
  }

  chequed(categoria: any) {
    this.abmProductosService.filtrarProducto(categoria).subscribe((res) => {
      console.log('selecciono', res);
      this.claseSeleccionada = res;
    });
  }

  ngOnInit(): void {
    this.listarProductos(); // Listo todos los productos
    this.listarCategoria(); // Listo todas las categorias
  }
}
