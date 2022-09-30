import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../model/Iproductos';
import { Imagen } from '../model/Ifile';
import { CatProducto } from '../model/IcatProd';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AbmProductosService {
  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  listarProductos() {
    return this.http.get<Producto[]>(`${this.API_URI}/productos`);
  }
  listarProducto(id: string) {
    return this.http.get(`${this.API_URI}/productos/single/${id}`);
  }
  filtrarPorCategoria(idCategoria: any) {
    return this.http.get<Producto[]>(`${this.API_URI}/productos/categoria/${idCategoria}`);
  }

  // rutas privadas//---------------------------------------------------------------//
  crearProducto(datos: any): Observable<Object> {
    return this.http.post<Object>(
      `${this.API_URI}/admin/productos/create`,
      datos
    );
  }

  actualizarProducto(
    id: string | undefined | number,
    actualizarProducto: any
  ): Observable<any> {
    console.log('datos recibidos del acualizarProducto:', actualizarProducto);
    return this.http.post(
      `${this.API_URI}/admin/productos/update/${id}`,
      actualizarProducto
    );
  }

  eliminarProducto(id: string) {
    return this.http.get(`${this.API_URI}/admin/productos/del/${id}`);
  }

  listarProductoUpdate(id: string) {
    return this.http.get(`${this.API_URI}/admin/productos/singleUpdate/${id}`);
  }

  listarCategorias() {
    return this.http.get<CatProducto[]>(
      `${this.API_URI}/admin/productos/create`
    );
  }

  filtrarProducto(idCategoria: string) {
    return this.http.get(
      `${this.API_URI}/admin/productos/categoria/${idCategoria}`
    );
  }

  // verifico el interceptor
  verificarInterceptor() {
    return this.http.get(`${this.API_URI}/productos`);
  }
}
