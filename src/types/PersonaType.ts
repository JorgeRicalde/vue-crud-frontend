export type Persona = {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  email: string;
};

export type InsertarPersona = {
  nombre: string;
  apellido: string;
  edad: number;
  email: string;
};

export type ActualizarPersona = {
  nombre: string;
  apellido: string;
  edad: number;
  email: string;
};
