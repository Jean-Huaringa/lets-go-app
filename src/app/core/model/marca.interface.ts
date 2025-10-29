export interface MarcaDTO {
  id: number;
  nombre: string;
  isEnabled: boolean;
}

export interface MarcaCreacionDTO {
  nombre: string;
}

export interface MarcaActualizarDTO {
  nombre: string;
  isEnabled: boolean;
}