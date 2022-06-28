import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaTareasRoutingModule } from './lista-tareas-routing.module';
import { ListaTareasComponent } from './lista-tareas.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [ListaTareasComponent],
  imports: [
    CommonModule,
    ListaTareasRoutingModule,
    DragDropModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
})
export class ListaTareasModule {}
