import { Component, OnInit, ViewChild } from '@angular/core';

import { AbmProductosService } from '../../../../services/abm-productos.service';
import { MessagesService } from '../../../../services/messages.service';
import { Producto } from '../../../../model/Iproductos';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css'],
})
export class TablaProductosComponent implements OnInit {
  displayedColumns: any[] = [
    // tomo los datos de get productos
    'idProducto',
    'imagenProducto',
    'nombreProducto',
    'categoriaProducto',
    'fuegos',
    'unidadesProducto',
    'kilosProducto',
    'nombreFantasia',
    'contactoProv',
    'telefonoProv',
    'acciones',
  ];

  //creo un arreglo para que se almacenen todos aca
  arrayProductos: Producto[] = [];
  loading: boolean = false;
  alerta: string = '';

  // arrayDestroy:Array<Subscription> | undefined;

  dataSource: MatTableDataSource<Producto> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private router: Router,
    private abmProductosService: AbmProductosService,
    //private messagesService: MessagesService
    private _snackBar: MatSnackBar
  ) {}

  // traigo a la funcion listarProductos del service
  listarProductos() {
    this.loading = true;

    this.abmProductosService.listarProductos().subscribe(
      (res) => {
        this.loading = false;
        console.log('Tabla-productos:', res);
        this.arrayProductos = res;
        this.dataSource.data = res;
      },
      (err) => console.log(err)
    );
  }
  // traigo la funcion eliminar Producto del services
  eliminarProducto(id: string) {
    this.loading = true;
    this.alerta = 'El producto fue eliminado con exito';

    this.abmProductosService.eliminarProducto(id).subscribe(
      (res) => {
        console.log('se elemino:', res);

        this.listarProductos();
        this.openMessage(this.alerta);
      },
      (err) => console.log(err)
    );
    console.log(id);
  }
  // funcion de mensaje de alerta
  openMessage(message: string) {
    this._snackBar.open(message, '', { duration: 2000 });
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
  ngOnInit(): void {
    this.listarProductos(); // coloco aca la funcion listarProductos para que se ejecute cuando arranca el sistema
  }
}
