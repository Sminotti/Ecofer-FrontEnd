import { TablaProductosRoutingModule } from './tabla-productos-routing.module';
import { TablaProductosComponent } from './tabla-productos.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [TablaProductosComponent],
  imports: [
    CommonModule,
    TablaProductosRoutingModule,
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
    MatProgressBarModule,
    MatSnackBarModule,
  ],
})
export class TablaProductosModule {}
