import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaProveedoresComponent } from './tabla-proveedores.component';
import { EditarProveedoresComponent } from '../editar-proveedores/editar-proveedores.component';
const routes: Routes = [
  {
    path:'',
    component:TablaProveedoresComponent
  },

  // {
  //   path:'del/:id',
  // },
  {
    path:'singleUpdate/:id',
    component:EditarProveedoresComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablaProveedoresRoutingModule { }
