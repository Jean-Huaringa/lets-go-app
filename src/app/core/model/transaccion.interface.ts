import { ProductoDTO } from "./producto.interface";

export interface TransaccionDTO {
  id: number;
  producto: ProductoDTO;
  unidades: number;
  descuento: number;
  precioUnitario: number;
  total: number;
}

export interface TransaccionCreacionDTO {
  idProducto: number;
  unidades: number;
}