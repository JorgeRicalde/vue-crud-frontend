<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { PersonaService } from '@/services/PersonaService';
import { SwalInfo } from '@/services/Swal';

const emit = defineEmits(['onDeseleccionarPersona', 'onRefrescarTabla']);
const props = defineProps<{ personaId: number | null }>();

const persona = ref({
  nombre: '',
  apellido: '',
  edad: 0,
  email: '',
});

watch(
  () => props.personaId,
  async (newId) => {
    if (newId) {
      const resultado = await PersonaService.getById(newId);
      persona.value.nombre = resultado.nombre;
      persona.value.apellido = resultado.apellido;
      persona.value.edad = resultado.edad;
      persona.value.email = resultado.email;
    }
  }
);

function onCancel() {
  onClean();
  emit('onDeseleccionarPersona');
}

function onClean() {
  persona.value.nombre = '';
  persona.value.apellido = '';
  persona.value.edad = 0;
  persona.value.email = '';
}

async function onSubmit() {
  let mensaje = '';

  if (props.personaId) {
    mensaje = await PersonaService.update(props.personaId, persona.value);
  } else {
    mensaje = await PersonaService.insert(persona.value);
  }

  if (mensaje) SwalInfo({ text: mensaje });

  onCancel();
  emit('onRefrescarTabla');
}
</script>

<template>
  <form class="container-fluid" @submit.prevent="onSubmit">
    <div class="mb-3">
      <h2 v-if="personaId">Editando Persona</h2>
      <h2 v-else>Crear nueva persona</h2>
    </div>
    <div class="mb-3">
      <label for="nombres" class="form-label">Nombres</label>
      <input type="text" class="form-control" id="nombre" v-model="persona.nombre" />
    </div>
    <div class="mb-3">
      <label for="apellidos" class="form-label">Apellidos</label>
      <input type="text" class="form-control" id="apellidos" v-model="persona.apellido" />
    </div>
    <div class="mb-3">
      <label for="edad" class="form-label">Edad</label>
      <input type="text" class="form-control" id="edad" v-model="persona.edad" />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" id="email" v-model="persona.email" />
    </div>
    <div v-if="!props.personaId" class="d-flex justify-content-center gap-1">
      <button type="submit" class="btn btn-primary">Registrar</button>
      <button type="button" class="btn btn-secondary" @click="onClean()">Limpiar</button>
    </div>
    <div v-if="!!props.personaId" class="d-flex justify-content-center gap-1">
      <button type="submit" class="btn btn-success">Actualizar</button>
      <button type="button" class="btn btn-danger" @click="onCancel()">Cancelar</button>
    </div>
  </form>
</template>

<style scoped></style>
