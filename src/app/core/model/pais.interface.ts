export interface PaisDTO {
  id: number;
  nombre: string;
  img: string;
  abreviatura: string;
  simbolo: string;
}

export interface PaisCreacionDTO {
  nombre: string;
  img: string;
  abreviatura: string;
  simbolo: string;
}

export interface PaisActualizarDTO {
  nombre: string;
  img: string;
  abreviatura: string;
  simbolo: string;
  isEnabled: boolean;
}