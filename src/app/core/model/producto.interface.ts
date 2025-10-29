export interface ProductoDTO {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  subcategoria: string;
  branch: string;
  material: string;
  marca: string;
  isEnabled: boolean;
}

export interface ProductoCreacionDTO {
  nombre: string;
  descripcion: string;
  precio: number;
  idCategoria: number;
  idSubcategoria: number;
  idBranch: number;
  idMaterial: number;
  idMarca: number;
}

export interface ProductoActualizarDTO {
  nombre: string;
  descripcion: string;
  precio: number;
  idCategoria: number;
  idSubcategoria: number;
  idBranch: number;
  idMaterial: number;
  idMarca: number;
  isEnabled: boolean;
}
