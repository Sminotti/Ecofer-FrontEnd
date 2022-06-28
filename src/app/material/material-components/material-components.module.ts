import { ModuleWithProviders, NgModule, Type } from '@angular/core';

//aca importo todos los componentes de angular que voy a usar
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';

//creo un array de componentes
const MaterialComponents  =[
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatSidenavModule,
  MatMenuModule,
  MatCardModule
];

@NgModule({

  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialComponentsModule {
  showFiller = false;
}
