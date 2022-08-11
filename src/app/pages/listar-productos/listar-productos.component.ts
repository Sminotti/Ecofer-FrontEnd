import { Component, HostBinding, OnInit } from '@angular/core';
import { AbmProductosService } from '../../services/abm-productos.service';
import { Producto } from '../../model/Iproductos';
import { HandlerImageService } from '../../services/handler-image.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css'],
})
export class ListarProductosComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  // creo un arreglo para que se almacenen todos aca
  arrayProductos: Producto[] = [];
  // edit = false;

  constructor(private abmProductosService: AbmProductosService, private handlerImageService: HandlerImageService) {}

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
        // this.edit == false;

        this.arrayProductos = res;
        console.log("listando productos:",this.arrayProductos);
       //intercepto los datos que entran a este link
        this.abmProductosService.verificarInterceptor().subscribe(resp=>{
          console.log('interceptor: ',resp);
        });
      },
      (err) => console.log(err)
    );
  }




  ngOnInit(): void {
    this.listarProductos(); // coloco aca la funcion listarProductos para que se ejecute cuando arranca el sistema
  }

}
