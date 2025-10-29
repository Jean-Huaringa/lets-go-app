export interface CambiarClaveDto {
  claveActual: string;
  nuevaClave: string;
}

export interface UsuarioCreacionDTO {
  nombre: string;
  apellido: string;
  tipoDocumento: string;
  nmrDocumento: string;
  email: string;
  clave: string;
  telefono: string;
  idRol: number;
  idPais: number;
  idDepartamento: number;
  idProvincia: number;
  idDistrito: number;
}