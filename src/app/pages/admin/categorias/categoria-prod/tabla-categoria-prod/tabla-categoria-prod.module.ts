import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablaCategoriaProdRoutingModule } from './tabla-categoria-prod-routing.module';
import { TablaCategoriaProdComponent } from './tabla-categoria-prod.component';

import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    TablaCategoriaProdComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    TablaCategoriaProdRoutingModule,
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
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule,
  ]
})
export class TablaCategoriaProdModule { }
