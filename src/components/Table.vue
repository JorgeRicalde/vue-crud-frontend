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
  <table class="table text-center">
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
        <th scope="row">{{ idx + 1 }}</th>
        <td>{{ persona.nombre }}</td>
        <td>{{ persona.apellido }}</td>
        <td>{{ persona.edad }}</td>
        <td>{{ persona.email }}</td>
        <td class="d-flex justify-content-center gap-1">
          <button class="btn btn-success" @click="onEdit(persona.id)">Editar</button>
          <button class="btn btn-danger" @click="onDelete(persona.id)">Eliminar</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
