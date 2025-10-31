export interface DepartamentoDTO {
  id: number;
  nombre: string;
  paisId: number;
}

export interface DepartamentoCreacionDTO {
  nombre: string;
  paisId: number;
}

export interface DepartamentoActualizarDTO {
  nombre: string;
  paisId: number;
  isEnabled: boolean;
}