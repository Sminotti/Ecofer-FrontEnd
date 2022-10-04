import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductosComponent } from './listar-productos.component';
import { FormProdComponent } from 'src/app/components/form-prod/form-prod.component';

const routes: Routes = [
  {
    path: '',
    component: ListarProductosComponent,
  },
  {
    path: 'single/:id',
    component: FormProdComponent,
  },
  // {
  //   path: 'categoria/:categoria',
  //   component: ListarProductosComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarProductosRoutingModule {}
