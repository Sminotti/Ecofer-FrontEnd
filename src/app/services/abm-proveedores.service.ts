import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proveedores } from '../model/Iproveedores';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AbmProveedoresService {
  API_URI = 'http://localhost:3000'; //guardo la direccion del backEnd (API)

  constructor(private http: HttpClient) {}

    listarProveedores() {
    return this.http.get<Proveedores[]>(`${this.API_URI}/admin/proveedores`);
  }
  listarProveedor(id: string) {
    return this.http.get<Proveedores[]>(`${this.API_URI}/admin/proveedores/singleUpdate/${id}`);
  }
  crearProveedor(crearProveedor:Proveedores) {
    return this.http.post(`${this.API_URI}/admin/proveedores/create`,crearProveedor);
  }
  actualizarProveedor(id: string | undefined | number,data: Proveedores
  ): Observable<Proveedores> {
    return this.http.post(
      `${this.API_URI}/admin/proveedores/update/${id}`,
      data
    );
  }
  eliminarProveedor(id: string) {
    return this.http.get(`${this.API_URI}/admin/proveedores/del/${id}`);
  }
}
