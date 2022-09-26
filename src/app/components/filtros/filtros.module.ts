import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltrosRoutingModule } from './filtros-routing.module';
import { FiltrosComponent } from './filtros.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    FiltrosComponent
  ],
  imports: [
    CommonModule,
    FiltrosRoutingModule,
    MatCheckboxModule
  ],
  exports:[
    FiltrosRoutingModule
  ]
})
export class FiltrosModule { }
