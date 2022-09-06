import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarUsuarioRoutingModule } from './editar-usuario-routing.module';
import { EditarUsuarioComponent } from './editar-usuario.component';


@NgModule({
  declarations: [
    EditarUsuarioComponent
  ],
  imports: [
    CommonModule,
    EditarUsuarioRoutingModule
  ]
})
export class EditarUsuarioModule { }
