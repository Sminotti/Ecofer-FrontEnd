import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCategoriaProdComponent } from './crear-categoria-prod.component';

const routes: Routes = [
  {
    path: '',
    component: CrearCategoriaProdComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearCategoriaProdRoutingModule { }
