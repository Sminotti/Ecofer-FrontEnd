


export interface Producto {
  idProveedores?: number;
  idProducto?: number;
  idImagen?: number;
  uid?: any;
  imagenProducto?: any;
  nombre?: string;
  idCategoria?: number;
  idProveedor?: number;
  kilosProducto?: number;
  kilos?:number;
  numeroSerie?: string;
  observacionesProd?: string;
  precioVenta?: number;
  precioCosto?: number;
  unidadesProducto?: number;

  nombreProducto?: string;
  unidades?:number;
//categoriaProducto
  descripcion?: string;
  fuegos?: string;
  aplicativos?: string;
 // categoriaProducto?: string;// MATAFUEGO / SERVICIOS / CARTELERIA
  claseProducto?: string;
  agenteExtintor?:string
  //proveedor
  nombreFantasia?: string;
  contactoProv?: string;
  telefonoProv?: string;
  direccion?:string;
}
