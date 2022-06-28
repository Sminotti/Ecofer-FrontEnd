import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './crear-producto.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

const routes: Routes = [
  {
    path: '',
    component: CrearProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),NgxDropzoneModule],
  exports: [RouterModule],
})
export class CrearProductoRoutingModule {}
