import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarProveedoresRoutingModule } from './editar-proveedores-routing.module';
import { EditarProveedoresComponent } from './editar-proveedores.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    EditarProveedoresComponent
  ],
  imports: [
    CommonModule,
    EditarProveedoresRoutingModule,
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
    MatSnackBarModule,
  ]
})
export class EditarProveedoresModule { }
