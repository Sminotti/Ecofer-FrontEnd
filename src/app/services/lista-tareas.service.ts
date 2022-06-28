import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListarTareas } from '../model/IlistarTareas';

@Injectable({
  providedIn: 'root',
})
export class ListaTareasService {
  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  listarTareas() {
    return this.http.get<ListarTareas[]>(`${this.API_URI}/admin/tareas`);
  }

  crearTarea(tarea: any) {
    return this.http.post<Object>(`${this.API_URI}/admin/tareas/create`, tarea);
  }

  eliminarTarea(id: String) {
    return this.http.get(`${this.API_URI}/admin/tareas/del/${id}`);
  }

  verificarInterceptor() {
    return this.http.get(`${this.API_URI}/admin/tareas`);
  }
}
