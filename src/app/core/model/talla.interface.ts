export interface TallaDTO {
  id: number;
  numero: number;
  isEnabled: boolean;
}

export interface TallaCreacionDTO {
  numero: number;
}

export interface TallaActualizarDTO {
  numero: number;
  isEnabled: boolean;
}