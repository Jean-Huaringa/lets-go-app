import { UsuarioCreacionDTO } from "./usuario.interface";

export interface TrabajadorDTO {
  id: number;
  salario: number;
  horasLaborales: number;
  nombre: string;
  apellido: string;
  email: string;
  enabled: boolean;
}

export interface TrabajadorCreacionDTO {
  salario: number;
  horasLaborales: number;
  usuario: UsuarioCreacionDTO;
  idTienda: number;
}

export interface TrabajadorActualizarDTO {
  salario: number;
  horasLaborales: number;
  idTienda: number;
  isEnabled: boolean;
}