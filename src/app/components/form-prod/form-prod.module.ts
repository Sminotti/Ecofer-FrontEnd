import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormProdRoutingModule } from './form-prod-routing.module';
import { FormProdComponent } from './form-prod.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    FormProdComponent
  ],
  imports: [
    CommonModule,
    FormProdRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatSelectModule
  ]
})
export class FormProdModule { }
