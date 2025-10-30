export interface DistritoDTO {
  id: number;
  nombre: string;
  provinciaId: number;
}

export interface DistritoCreacionDTO {
  nombre: string;
  provinciaId: number;
}

export interface DistritoActualizarDTO {
  nombre: string;
  provinciaId: number;
  isEnabled: boolean;
}