import type { ActualizarPersona, InsertarPersona, Persona } from '@/types/PersonaType';
import { AxiosApp } from './AxiosApp';

const API_URL = '/persona';

export class PersonaService {
  public static async getAll(): Promise<Persona[]> {
    return await AxiosApp.get(API_URL);
  }

  public static async getById(id: number): Promise<Persona> {
    return await AxiosApp.get(`${API_URL}/${id}`);
  }

  public static async insert(persona: InsertarPersona): Promise<string> {
    return await AxiosApp.post(API_URL, persona);
  }

  public static async update(id: number, persona: ActualizarPersona): Promise<string> {
    return await AxiosApp.put(`${API_URL}/${id}`, persona);
  }

  public static async delete(id: number): Promise<string> {
    return await AxiosApp.delete(`${API_URL}/${id}`);
  }
}
