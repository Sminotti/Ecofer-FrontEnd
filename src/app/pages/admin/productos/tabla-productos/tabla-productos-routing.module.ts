import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaProductosComponent } from './tabla-productos.component';
import { EditarProductoComponent } from '../editar-producto/editar-producto.component';

const routes: Routes = [
  {
    path: '',
    component: TablaProductosComponent,
  },

  {
    path: 'singleUpdate/:id',
    component: EditarProductoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablaProductosRoutingModule {}
