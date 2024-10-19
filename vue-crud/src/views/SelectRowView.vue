<template>
  <div>
    <h3>Seleção de uma linha aleatória</h3>
    <p v-if="selectionTime">Tempo de seleção: {{ selectionTime }} ms</p>
    <button @click="selectRandomRow">Selecionar Linha Aleatória</button>

    <div v-if="selectedRow">
      <h4>Linha Selecionada:</h4>
      <p><strong>ID:</strong> {{ selectedRow.id }}</p>
      <p><strong>Nome:</strong> {{ selectedRow.name }}</p>
      <p><strong>Email:</strong> {{ selectedRow.email }}</p>
      <p><strong>Endereço:</strong> {{ selectedRow.address }}</p>
    </div>

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
const selectedRow = ref(null);
const selectionTime = ref(null);

const generateData = () => {
  return Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    address: faker.location.streetAddress(),
  }));
};

data.value = generateData();

const selectRandomRow = () => {
  const startTime = performance.now();

  const randomIndex = Math.floor(Math.random() * data.value.length);
  selectedRow.value = data.value[randomIndex];

  const endTime = performance.now();
  selectionTime.value = endTime - startTime;
};
</script>

