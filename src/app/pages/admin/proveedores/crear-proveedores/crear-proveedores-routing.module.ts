import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProveedoresComponent } from './crear-proveedores.component';

const routes: Routes = [
 {
  path:'',
  component:CrearProveedoresComponent,
 }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearProveedoresRoutingModule { }
