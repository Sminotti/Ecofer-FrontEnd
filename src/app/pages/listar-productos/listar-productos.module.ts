import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarProductosComponent } from './listar-productos.component';
import { ListarProductosRoutingModule } from './listar-productos-routing.module';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ListarProductosComponent],
  imports: [
    RouterModule,
    CommonModule,
    MatCardModule,
    ListarProductosRoutingModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
})
export class ListarProductosModule {}
