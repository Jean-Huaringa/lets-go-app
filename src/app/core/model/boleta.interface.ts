import { TiendaDTO } from "./tienda.interface";
import { TrabajadorDTO } from "./trabajador.interface";
import { TransaccionCreacionDTO, TransaccionDTO } from "./transaccion.interface";
import { UsuarioDTO } from "./usuario.interface";

export interface BoletaDTO {
  id: number;
  direccion: string;
  tipoTarjeta: string;
  totalDescuento: number;
  nombreCliente: string;
  numeroDocumento: string;
  subtotal: number;
  igv: number;
  total: number;
  estado: string;
  observaciones: string;
  usuario: UsuarioDTO;
  trabajador: TrabajadorDTO;
  tienda: TiendaDTO;
  createdAt: string;
  transacciones: TransaccionDTO[];
}

export interface BoletaCreacionDTO {
  direccion: string;
  tipoTarjeta: string;
  totalDescuento: number;
  nombreCliente: string;
  numeroDocumento: string;
  subtotal: number;
  igv: number;
  total: number;
  estado: string;
  observaciones: string;
  idUsuario: number;
  idTrabajador: number;
  idTienda: number;
  transacciones: TransaccionCreacionDTO[];
}
