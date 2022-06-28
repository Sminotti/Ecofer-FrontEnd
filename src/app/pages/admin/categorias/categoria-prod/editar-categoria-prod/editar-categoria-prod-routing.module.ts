import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarCategoriaProdComponent } from './editar-categoria-prod.component';

const routes: Routes = [

  {
    path: '',
    component: EditarCategoriaProdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarCategoriaProdRoutingModule { }
