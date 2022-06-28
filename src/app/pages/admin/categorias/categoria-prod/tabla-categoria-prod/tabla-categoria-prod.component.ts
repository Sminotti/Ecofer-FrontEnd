import { Component, OnInit, ViewChild } from '@angular/core';

import { AbmCategoriasProdService} from '../../../../../services/abm-categorias-prod.service';
import { CatProducto } from '../../../../../model/IcatProd';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabla-categoria-prod',
  templateUrl: './tabla-categoria-prod.component.html',
  styleUrls: ['./tabla-categoria-prod.component.css']
})
export class TablaCategoriaProdComponent implements OnInit {
  displayedColumns: string[] = [
'id',
'agExtintor',
'clase',
'descripcion',
'fuegos',
'aplicativos',
'acciones',
  ];


  arrayCatProductos: CatProducto[] = [];

  dataSource: MatTableDataSource<CatProducto> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private router: Router,
    private abmCategoriasProdService: AbmCategoriasProdService
  ) {}

  ngOnInit(): void {
    this.listarCategorias(); // coloco aca la funcion listarProductos para que se ejecute cuando arranca el sistema
  }

  listarCategorias() {
    this.abmCategoriasProdService.listarCategorias().subscribe(
      (res) => {
        console.log(res);
        this.arrayCatProductos = res;
        this.dataSource.data = res;
        //intercepto los datos que entran a este link
        this.abmCategoriasProdService.verificarInterceptor().subscribe((resp) => {
          console.log('interceptor: ', resp);
        });
        //-------------------------------------------------------------------------
      },
      (err) => console.log(err)
    );
  }
  // traigo la funcion eliminar Producto del services
  eliminarCategoria(id: string) {
    this.abmCategoriasProdService.eliminarCategoria(id).subscribe(
      (res) => {
        // console.log(res);
        this.listarCategorias();
      },
      (err) => console.log('ver', err)
    );
    console.log(id);
  }

  // creo la funcion filter
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  // Paginator
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
