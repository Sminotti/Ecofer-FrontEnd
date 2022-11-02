import { Component, OnInit, ViewChild } from '@angular/core';

import { AbmProveedoresService } from '../../../../services/abm-proveedores.service';
import { Proveedores } from '../../../../model/Iproveedores';

import { EditarProveedoresComponent } from '../editar-proveedores/editar-proveedores.component';
import { CrearProveedoresComponent } from '../crear-proveedores/crear-proveedores.component';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tabla-proveedores',
  templateUrl: './tabla-proveedores.component.html',
  styleUrls: ['./tabla-proveedores.component.css'],
})
export class TablaProveedoresComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'razonSocial',
    'nombreFantasia',
    'contacto',
    'direccion',
    'codPostal',
    'cuil',
    'telefono',
    'localidad',
    'observacionesProv',
    'acciones',
  ];

  //creo un arreglo para que se almacenen todos aca
  arrayProveedores: Proveedores[] = [];

  dataSource: MatTableDataSource<Proveedores> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  loading: boolean = false;
  alerta: string = '';

  constructor(
    private router: Router,
    private abmProveedoresService: AbmProveedoresService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.listarProveedores();
  }

  listarProveedores() {
    this.abmProveedoresService.listarProveedores().subscribe(
      (res) => {
        console.log(res);
        this.arrayProveedores = res;
        this.dataSource.data = res;
      },
      (err) => console.log(err)
    );
  }

  eliminarProveedor(id: string) {
    this.loading = true;
    this.alerta = 'El proveedor fue eliminado con exito';
    this.abmProveedoresService.eliminarProveedor(id).subscribe(
      (res) => {
        console.log(res);

        this.listarProveedores();
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
  // abro el modal de crear categoria
  openDialog() {
    const dialogRef = this.dialog.open(CrearProveedoresComponent, {
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogEdit(id: string) {
    // abro e modal de editar categoria
    const dialogRef = this.dialog.open(EditarProveedoresComponent, {
      disableClose: true,
      data: id,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`DialogEdit result: ${result}`);
    });
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
