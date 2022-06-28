import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearProductoRoutingModule } from './crear-producto-routing.module';
import { CrearProductoComponent } from './crear-producto.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [CrearProductoComponent],
  imports: [
    CommonModule,
    CrearProductoRoutingModule,
    RouterModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFileUploadModule,
    NgxDropzoneModule,
    MatDialogModule,
  ],
})
export class CrearProductoModule {}
