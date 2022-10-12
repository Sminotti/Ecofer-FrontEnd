import { Component, HostBinding, OnInit } from '@angular/core';

import { AbmProductosService } from '../../services/abm-productos.service';
import { AbmCategoriasProdService } from 'src/app/services/abm-categorias-prod.service';
import { FiltrarObjejosArrayService } from 'src/app/services/filtrar-objejos-array.service';

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
    private abmCategoriasProdService: AbmCategoriasProdService,
    private filtrarObjejosArrayService: FiltrarObjejosArrayService
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
      // extraigo del Array productos el idCategoria y la claseProducto .
      const result = this.arrayProductos.map(
        ({ idCategoria, claseProducto }) => ({
          idCategoria,
          claseProducto,
        })
      );
      // guardo el resultado en un Array
      this.arrayProdFiltrados = result;
      console.log('clases:', this.arrayProdFiltrados);

      // elimino los repetidos
      const resultFiltrado = this.filtrarObjejosArrayService.eliminaDuplicados(
        this.arrayProdFiltrados
      );
      // guardo el resultado en el arrayProdFiltrados
      this.arrayProdFiltrados = resultFiltrado;

      console.log('clasesFiltradas:', this.arrayProdFiltrados);
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
