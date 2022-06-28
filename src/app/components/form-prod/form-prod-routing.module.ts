import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProdComponent } from './form-prod.component';

const routes: Routes = [
  {
    path:'',
    component:FormProdComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormProdRoutingModule { }
