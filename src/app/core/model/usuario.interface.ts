export interface UsuarioDTO {
  id: number;
  nombre: string;
  apellido: string;
  tipoDocumento: string;
  nmrDocumento: string;
  email: string;
  telefono: string;
  rol: string;
  pais: string;
  departamento: string;
  provincia: string;
  distrito: string;  
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

export interface UsuarioActualizarCorreoDTO {
  email: string;
}
