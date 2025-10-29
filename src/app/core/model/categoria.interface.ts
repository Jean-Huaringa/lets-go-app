export interface CategoriaDTO {
  id: number;
  nombre: string;
  isEnabled: boolean;
}

export interface CategoriaCreacionDTO {
  nombre: string;
}

export interface CategoriaActualizarDTO {
  nombre: string;
  isEnabled: boolean;
}