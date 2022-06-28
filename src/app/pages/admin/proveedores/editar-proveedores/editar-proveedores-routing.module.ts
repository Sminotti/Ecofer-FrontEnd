import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarProveedoresComponent } from './editar-proveedores.component';

const routes: Routes = [
  {
    path:'',
    component:EditarProveedoresComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarProveedoresRoutingModule { }
