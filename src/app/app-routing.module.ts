import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// paginas publicas
import { HomeModule } from 'src/app/pages/home/home.module';
import { ListarProductosModule } from 'src/app/pages/listar-productos/listar-productos.module';
import { FormProdModule } from 'src/app/components/form-prod/form-prod.module'; //pagina que muestra un solo producto seleccionado
import { ClientesModule } from 'src/app/pages/clientes/clientes.module';
import { AboutModule } from 'src/app/pages/about/about.module';
import { ContactoModule } from 'src/app/pages/contacto/contacto.module';
import { FaqsModule } from 'src/app/pages/faqs/faqs.module';
import { RegistroModule } from 'src/app/pages/registro/registro.module';
import { LoginModule } from 'src/app/pages/login/login.modulel';

// paginas privadas
import { TablaProductosModule } from 'src/app/pages/admin/productos/tabla-productos/tabla-productos.module';
import { TablaCategoriaProdModule } from './pages/admin/categorias/categoria-prod/tabla-categoria-prod/tabla-categoria-prod.module';
import { TablaProveedoresModule } from 'src/app/pages/admin/proveedores/tabla-proveedores/tabla-proveedores.module';
import { CrearProductoModule } from './pages/admin/productos/crear-producto/crear-producto.module';
import { CrearCategoriaProdModule } from 'src/app/pages/admin/categorias/categoria-prod/crear-categoria-prod/crear-categoria-prod.module';
import { CrearProveedoresModule } from './pages/admin/proveedores/crear-proveedores/crear-proveedores.module';
import { EditarProductoModule } from './pages/admin/productos/editar-producto/editar-producto.module';
import { EditarProveedoresModule } from './pages/admin/proveedores/editar-proveedores/editar-proveedores.module';
import { EditarCategoriaProdModule } from './pages/admin/categorias/categoria-prod/editar-categoria-prod/editar-categoria-prod.module';
import { ControlPanelModule } from './pages/admin/control-panel/control-panel.module';
import { ListaTareasModule } from 'src/app/pages/admin/lista-tareas/lista-tareas.module';
import { UsuariosModule } from 'src/app/pages/admin/usuarios/listar-usuarios/usuarios.module';
import { EditarUsuarioModule } from 'src/app/pages/admin/usuarios/editar-usuario/editar-usuario.module';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    title: 'Home',

    loadChildren: () =>
      import('src/app/pages/home/home.module').then((m) => HomeModule),
  },

  {
    path: 'registro',
    title: 'Registro de usuario',

    loadChildren: () =>
      import('src/app/pages/registro/registro.module').then(
        (m) => RegistroModule
      ),
  },

  {
    path: 'login',
    title: 'Login',

    loadChildren: () =>
      import('src/app/pages/login/login.modulel').then((m) => LoginModule),
  },

  {
    path: 'productos',
    title: 'Listado de productos',

    loadChildren: () =>
      import('src/app/pages/listar-productos/listar-productos.module').then(
        (m) => ListarProductosModule
      ),
  },

  {
    path: 'productos/categoria/categoria/:categoria',

    loadChildren: () =>
      import('src/app/pages/listar-productos/listar-productos.module').then(
        (m) => ListarProductosModule
      ),
  },

  {
    path: 'clientes/all',
    title: 'Nuestros clientes',

    loadChildren: () =>
      import('src/app/pages/clientes/clientes.module').then(
        (m) => ClientesModule
      ),
  },

  {
    path: 'contacto',
    title: 'Contacto',

    loadChildren: () =>
      import('src/app/pages/contacto/contacto.module').then(
        (m) => ContactoModule
      ),
  },

  {
    path: 'faqs',
    title: 'Preguntas frecuentes',

    loadChildren: () =>
      import('src/app/pages/faqs/faqs.module').then((m) => FaqsModule),
  },

  {
    path: 'about',
    title: 'Sobre nosotros',

    loadChildren: () =>
      import('src/app/pages/about/about.module').then((m) => AboutModule),
  },
  // RUTAS PRIVADAS//-------------------------------------------------------------------------------------------------------------------------------

  {
    path: 'admin/controlPanel',
    title: 'Panel de control',

    loadChildren: () =>
      import('src/app/pages/admin/control-panel/control-panel.module').then(
        (m) => ControlPanelModule
      ),
    canActivate: [AuthGuard],
  },

  {
    path: 'admin/categoriasProd',
    title: 'Categorias de productos',

    loadChildren: () =>
      import(
        'src/app/pages/admin/categorias/categoria-prod/tabla-categoria-prod/tabla-categoria-prod.module'
      ).then((m) => TablaCategoriaProdModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'admin/categoriasProd/create',
    title: 'Crear categoria',

    loadChildren: () =>
      import(
        'src/app/pages/admin/categorias/categoria-prod/crear-categoria-prod/crear-categoria-prod.module'
      ).then((m) => CrearCategoriaProdModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'admin/categoriasProd/update/:id',
    title: 'Actualizar categoria',

    loadChildren: () =>
      import(
        'src/app/pages/admin/categorias/categoria-prod/editar-categoria-prod/editar-categoria-prod.module'
      ).then((m) => EditarCategoriaProdModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'admin/productos',
    title: 'Tabla de productos',

    loadChildren: () =>
      import(
        'src/app/pages/admin/productos/tabla-productos/tabla-productos.module'
      ).then((m) => TablaProductosModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'admin/productos/create',
    title: 'crear producto nuevo',

    loadChildren: () =>
      import(
        'src/app/pages/admin/productos/crear-producto/crear-producto.module'
      ).then((m) => CrearProductoModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'admin/productos/update/:id',
    title: 'Actualizar producto',

    loadChildren: () =>
      import(
        'src/app/pages/admin/productos/editar-producto/editar-producto.module'
      ).then((m) => EditarProductoModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'admin/proveedores',
    title: 'Tabla de proveedores',

    loadChildren: () =>
      import(
        'src/app/pages/admin/proveedores/tabla-proveedores/tabla-proveedores.module'
      ).then((m) => TablaProveedoresModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'admin/proveedores/create',
    title: 'Crear proveedores',

    loadChildren: () =>
      import(
        'src/app/pages/admin/proveedores/crear-proveedores/crear-proveedores.module'
      ).then((m) => CrearProveedoresModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'admin/proveedores/update/:id',
    title: 'Actualizar proveedores',

    loadChildren: () =>
      import(
        'src/app/pages/admin/proveedores/editar-proveedores/editar-proveedores.module'
      ).then((m) => EditarProveedoresModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'admin/tareas',
    title: 'Panel de tareas',

    loadChildren: () =>
      import('src/app/pages/admin/lista-tareas/lista-tareas.module').then(
        (m) => ListaTareasModule
      ),
    canActivate: [AuthGuard],
  },

  {
    path: 'admin/tareas/create',
    loadChildren: () =>
      import('src/app/pages/admin/lista-tareas/lista-tareas.module').then(
        (m) => ListaTareasModule
      ),
    canActivate: [AuthGuard],
  },

  {
    path: 'admin/usuarios',
    title:"Empleados",

    loadChildren: () =>
      import(
        'src/app/pages/admin/usuarios/listar-usuarios/usuarios.module'
      ).then((m) => UsuariosModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'admin/usuarios/update/:id',
    loadChildren: () =>
      import(
        'src/app/pages/admin/usuarios/editar-usuario/editar-usuario.module'
      ).then((m) => EditarUsuarioModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
