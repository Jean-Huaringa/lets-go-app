export interface SubcategoriaDTO {
  id: number;
  nombre: string;
  idCategoria: number;
  isEnabled: boolean;
}

export interface SubcategoriaCreacionDTO {
  nombre: string;
  idCategoria: number;
}

export interface SubcategoriaActualizarDTO {
  nombre: string;
  idCategoria: number;
  isEnabled: boolean;
}