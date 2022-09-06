import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';
import { EditarUsuarioComponent } from '../editar-usuario/editar-usuario.component';


const routes: Routes = [
  {
  path:'',
  component:UsuariosComponent
  },
  {
    path:'single/:id',
    component:EditarUsuarioComponent
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule  {}
