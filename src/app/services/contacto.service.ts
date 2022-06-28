import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  API_URI = 'http://localhost:3000'; //guardo la direccion del backEnd (API)

  constructor(private http: HttpClient) { }

enviarMail (contacto:any) {
  return this.http.post(`${this.API_URI}/contacto/sendEmail`,contacto);
}



}
