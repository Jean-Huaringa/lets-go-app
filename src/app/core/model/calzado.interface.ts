export interface CalzadoDTO {
  id: number;
  stock: number;
  estado: string;
  idProducto: number;
  idColor: number;
  idTalla: number;
  isEnabled: boolean;
}

export interface CalzadoCreacionDTO {
  stock: number;
  estado: string;
  idProducto: number;
  idColor: number;
  idTalla: number;
}

export interface CalzadoActualizarDTO {
  stock: number;
  estado: string;
  idProducto: number;
  idColor: number;
  idTalla: number;
  isEnabled: boolean;
}
