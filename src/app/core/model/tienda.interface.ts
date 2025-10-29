export interface TiendaDTO {
  id: number;
  rutaImagen: string;
  nombre: string;
  nombreLegal: string;
  direccion: string;
  ruc: string;
  pais: string;
  departamento: string;
  provincia: string;
  distrito: string;
  isEnabled: boolean;
}

export interface TiendaCreacionDTO {
  id: number;
  rutaImagen: string;
  nombre: string;
  nombreLegal: string;
  direccion: string;
  ruc: string;
  paisId: number;
  departamentoId: number;
  provinciaId: number;
  distritoId: number;
}

export interface TiendaActualizarDTO {
  id: number;
  rutaImagen: string;
  nombre: string;
  nombreLegal: string;
  direccion: string;
  ruc: string;
  paisId: number;
  departamentoId: number;
  provinciaId: number;
  distritoId: number;
  isEnabled: boolean;
}