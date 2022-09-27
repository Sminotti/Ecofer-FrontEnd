import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarProductosComponent } from './listar-productos.component';
import { ListarProductosRoutingModule } from './listar-productos-routing.module';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';

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
    MatCheckboxModule,
  ],
})
export class ListarProductosModule {}
