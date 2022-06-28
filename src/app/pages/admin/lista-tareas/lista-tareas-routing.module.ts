import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTareasComponent } from './lista-tareas.component';

const routes: Routes = [
  {
    path:'',
    component:ListaTareasComponent
  },

  {
    path: 'del/:id',
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaTareasRoutingModule { }
