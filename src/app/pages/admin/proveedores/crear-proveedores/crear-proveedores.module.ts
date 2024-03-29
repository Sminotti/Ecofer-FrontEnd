import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearProveedoresRoutingModule } from './crear-proveedores-routing.module';
import { CrearProveedoresComponent } from './crear-proveedores.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [CrearProveedoresComponent],
  imports: [
    CommonModule,
    CrearProveedoresRoutingModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
})
export class CrearProveedoresModule {}
