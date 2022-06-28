import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarCategoriaProdComponent } from '../editar-categoria-prod/editar-categoria-prod.component';
import { TablaCategoriaProdComponent } from './tabla-categoria-prod.component';

const routes: Routes = [
  {
    path: '',
    component: TablaCategoriaProdComponent,
  },
  {
    path: 'del/:id',
  },
  {
    path: 'singleUpdate/:id',
    component: EditarCategoriaProdComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablaCategoriaProdRoutingModule {}
