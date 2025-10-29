export interface ColorDTO {
  id: number;
  nombre: string;
  isEnabled: boolean;
}

export interface ColorCreacionDTO {
  nombre: string;
}

export interface ColorActualizarDTO {
  nombre: string;
  isEnabled: boolean; 
}
