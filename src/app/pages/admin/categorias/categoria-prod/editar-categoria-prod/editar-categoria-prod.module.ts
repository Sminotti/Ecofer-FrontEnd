import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarCategoriaProdRoutingModule } from './editar-categoria-prod-routing.module';
import { EditarCategoriaProdComponent } from './editar-categoria-prod.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
  EditarCategoriaProdComponent
  ],
  imports: [
    CommonModule,
    EditarCategoriaProdRoutingModule,
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
    MatDialogModule,
  ]
})
export class EditarCategoriaProdModule { }
