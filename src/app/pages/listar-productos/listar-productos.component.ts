import { Component, HostBinding, OnInit } from '@angular/core';

import { AbmProductosService } from '../../services/abm-productos.service';
import { AbmCategoriasProdService } from 'src/app/services/abm-categorias-prod.service';

import { Producto } from '../../model/Iproductos';
import { CatProducto } from '../../model/IcatProd';

import { HandlerImageService } from '../../services/handler-image.service';
import { Filtros } from 'src/app/model/Ifiltros';

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
  arrayProdFiltrados: any[] = [];

  constructor(
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
        this.listarCategoria();
      },
      (err) => console.log('Error page listarProductos:', err)
    );
  }
  listarCategoria() {
    try {
      const result = this.arrayProductos.map(
        ({ idCategoria, claseProducto }) => ({
          idCategoria,
          claseProducto,
        })
      );

      this.arrayProdFiltrados = result;
      console.log('clases:', this.arrayProdFiltrados);

      // const resultFiltrado = this.arrayProdFiltrados.reduce((arrayFiltrado,
      //   cate) => Array.from(new Set([arrayFiltrado, cate])))
      // console.log('clases:', resultFiltrado);

    } catch (error) {
      console.log(error);
    }
  }

  chequed(categoria: any) {
    // se ejecuta cuando haces click en el checkBox
    try {
      this.abmProductosService
        .filtrarPorCategoria(categoria)
        .subscribe((res) => {
          this.arrayProductos = res;
          console.log('selecciono', this.arrayProductos);
        });
    } catch (error) {
      console.log('error');
    }
  }

  eliminarFiltros() {
    this.listarProductos();
  }

  ngOnInit(): void {
    this.listarProductos(); // Listo todos los productos
    //this.listarCategoria(); // Listo todas las categoria
  }
}
