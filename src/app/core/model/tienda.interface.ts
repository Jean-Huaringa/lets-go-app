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
  rutaImagen: string;
  nombre: string;
  nombreLegal: string;
  direccion: string;
  ruc: string;
  ubicacion: string;
  telefono: string;
  mail: string;
  idPais: number;
  idDepartamento: number;
  idProvincia: number;
  idDistrito: number;
}

export interface TiendaActualizarDTO {
  id: number;
  rutaImagen: string;
  nombre: string;
  nombreLegal: string;
  direccion: string;
  ruc: string;
  ubicacion: string;
  telefono: string;
  mail: string;
  idPais: number;
  idDepartamento: number;
  idProvincia: number;
  idDistrito: number;
  isEnabled: boolean;
}