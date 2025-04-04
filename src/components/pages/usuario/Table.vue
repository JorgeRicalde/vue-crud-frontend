<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { PersonaService } from '@/services/PersonaService';
import { SwalInfo } from '@/services/Swal';
import type { Persona } from '@/types/PersonaType';

const emit = defineEmits(['seleccionarPersona']);
const personas = ref<Persona[]>([]);

async function onRefresh() {
  personas.value = await PersonaService.getAll();
}

async function onEdit(id: number) {
  emit('seleccionarPersona', id);
}

async function onDelete(id: number) {
  const mensaje = await PersonaService.delete(id);
  if (mensaje) SwalInfo({ text: mensaje });
  onRefresh();
}

onMounted(() => {
  onRefresh();
});

defineExpose({ onRefresh });
</script>

<template>
  <div class="table-responsive">
    <table class="table text-center align-middle">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Edad</th>
          <th scope="col">Email</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(persona, idx) in personas" :key="persona.id">
          <th scope="row" class="align-middle">
            {{ idx + 1 }}
          </th>
          <td class="align-middle">{{ persona.nombre }}</td>
          <td class="align-middle">{{ persona.apellido }}</td>
          <td class="align-middle">{{ persona.edad }}</td>
          <td class="align-middle">{{ persona.email }}</td>
          <td>
            <div class="d-flex justify-content-center align-items-center">
              <button class="btn btn-success mx-1" @click="onEdit(persona.id)">Editar</button>
              <button class="btn btn-danger mx-1" @click="onDelete(persona.id)">Eliminar</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
