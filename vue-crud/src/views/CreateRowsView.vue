<template>
  <div>
    <h3>Criação de 10.000 linhas</h3>
    <p v-if="creationTime">Tempo de criação: {{ creationTime }} ms</p>
    <button @click="createRows">Criar 10.000 Linhas</button>

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
  </div>
</template>

<script setup>
import { ref } from "vue";
import { faker } from "@faker-js/faker";

const data = ref([]);
const creationTime = ref(null);

const createRows = () => {
  const startTime = performance.now();

  data.value = Array.from({ length: 10000 }, (_, i) => ({
    id: i + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    address: faker.location.streetAddress(),
  }));

  const endTime = performance.now();
  creationTime.value = endTime - startTime;
};
</script>

