<script setup lang="ts">
import ContentBody from '@/components/ContentBody.vue';
import ContentHeader from '@/components/ContentHeader.vue';
import Form from '@/components/pages/usuario/Form.vue';
import Table from '@/components/pages/usuario/Table.vue';
import { ref } from 'vue';

const tablaRef = ref();
const personaIdSeleccionada = ref<number | null>(null);

function handleRefrescarTabla() {
  tablaRef.value?.onRefresh();
}

function handleSeleccionarPersona(id: number) {
  personaIdSeleccionada.value = id;
}

function handleDeseleccionarPersona() {
  personaIdSeleccionada.value = null;
}
</script>

<template>
  <ContentHeader title="Usuarios" />
  <ContentBody>
    <main class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-6">
          <Table ref="tablaRef" @seleccionarPersona="handleSeleccionarPersona" />
        </div>
        <div class="col-12 col-md-6">
          <Form
            :personaId="personaIdSeleccionada"
            @onDeseleccionarPersona="handleDeseleccionarPersona"
            @onRefrescarTabla="handleRefrescarTabla"
          />
        </div>
      </div>
    </main>
  </ContentBody>
</template>

<style scoped></style>
