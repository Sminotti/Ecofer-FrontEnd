import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarProductoRoutingModule } from './editar-producto-routing.module';
import { EditarProductoComponent } from './editar-producto.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFileUploadModule } from 'angular-material-fileupload';

@NgModule({
  declarations: [
    EditarProductoComponent
  ],
  imports: [
    CommonModule,
    EditarProductoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatFileUploadModule
  ]
})
export class EditarProductoModule { }
