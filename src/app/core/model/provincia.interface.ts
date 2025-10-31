export interface ProvinciaDTO {
  id: number;
  nombre: string;
  departamentoId: number;
}

export interface ProvinciaCreacionDTO {
  nombre: string;
  departamentoId: number;
}

export interface ProvinciaActualizarDTO {
  nombre: string;
  departamentoId: number;
  isEnabled: boolean;
}