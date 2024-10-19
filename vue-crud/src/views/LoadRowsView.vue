<template>
  <div>
    <h3>Carregamento de 1000 linhas</h3>
    <p v-if="loadingTime">Tempo de carregamento: {{ loadingTime }} ms</p>
    <table v-if="data.length">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Endereço</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in data" :key="row.id">
          <td>{{ row.id }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.email }}</td>
          <td>{{ row.address }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="loadRows">Carregar Linhas</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { faker } from "@faker-js/faker";

const data = ref([]);
const loadingTime = ref(null);

const loadRows = () => {
  const startTime = performance.now();
  data.value = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    address: faker.location.streetAddress(),
  }));
  const endTime = performance.now();
  loadingTime.value = endTime - startTime;
};
</script>

