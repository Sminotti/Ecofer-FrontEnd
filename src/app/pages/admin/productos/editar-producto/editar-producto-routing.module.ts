import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditarProductoComponent} from './editar-producto.component'

const routes: Routes = [
  {
    path:'',
    component:EditarProductoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarProductoRoutingModule { }
