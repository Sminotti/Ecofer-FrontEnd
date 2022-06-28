//aca importo los modulos
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// servicios
import { AbmProductosService } from './services/abm-productos.service';
import { AbmCategoriasProdService } from './services/abm-categorias-prod.service';
import { AbmProveedoresService } from './services/abm-proveedores.service';
import { ListaTareasService } from './services/lista-tareas.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NavbarModule } from './components/navbar/navbar.module';
import { TokenInterceptor } from './services/token.interceptor';
import { MatInputModule } from '@angular/material/input';
import { FooterModule } from './components/footer/footer.module';
import { SideNavModule } from './components/side-nav/side-nav.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    //aca van todos los modulos que importo
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    NavbarModule,
    MatInputModule,
    FooterModule,
    SideNavModule,
    MatSidenavModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    //MaterialComponentsModule//<-- aca agrego el modulo de material con los componentes
  ],
  providers: [
    //aca van todos los servicios
    AbmProductosService,
    AbmCategoriasProdService,
    AbmProveedoresService,
    ListaTareasService,

    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
