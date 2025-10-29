export interface BranchDTO {
  id: number;
  nombre: string;
  idSubcategoria: number;
  isEnabled: boolean;
}

export interface BranchCreacionDTO {
  nombre: string;
  idSubcategoria: number;
}

export interface BranchActualizarDTO {
  nombre: string;
  idSubcategoria: number;
  isEnabled: boolean;
}