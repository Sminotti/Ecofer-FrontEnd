import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearCategoriaProdRoutingModule } from './crear-categoria-prod-routing.module';
import { CrearCategoriaProdComponent } from './crear-categoria-prod.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    CrearCategoriaProdComponent
  ],
  imports: [
    CommonModule,
    CrearCategoriaProdRoutingModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ]
})
export class CrearCategoriaProdModule { }
