import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatProducto } from '../model/IcatProd';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AbmCategoriasProdService {
  API_URI = 'http://localhost:3000'; //guardo la direccion del backEnd (API)

  constructor(private http: HttpClient) {}

  listarCategorias() {
    return this.http.get<CatProducto[]>(`${this.API_URI}/admin/categoriasProd`);
  }
  listarCategoria(id: string) {
    return this.http.get(`${this.API_URI}/admin/categoriasProd/singleUpdate/${id}`);
  }
  crearCategoria(categoria: CatProducto) {
    return this.http.post(`${this.API_URI}/admin/categoriasProd/create`, categoria);
  }
  actualizarCategoria(
    id: string | undefined | number,
    actualizarCategoria: CatProducto
  ): Observable<CatProducto> {
    return this.http.post(
      `${this.API_URI}/admin/categoriasProd/update/${id}`,
      actualizarCategoria
    );
  }
  eliminarCategoria(id: string) {
    return this.http.get(`${this.API_URI}/admin/categoriasProd/del/${id}`);
  }


  // verifico el interceptor
  verificarInterceptor() {
    return this.http.get(`${this.API_URI}/admin/categoriasProd`);
  }
}
