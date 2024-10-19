<template>
  <div>
    <h3>Edição de uma linha aleatória</h3>
    <p v-if="editTime">Tempo de edição: {{ editTime }} ms</p>
    <button @click="editRandomRow">Editar Linha Aleatória</button>

    <div v-if="editedRow">
      <h4>Linha Editada:</h4>
      <p><strong>ID:</strong> {{ editedRow.id }}</p>
      <p><strong>Nome:</strong> {{ editedRow.name }}</p>
      <p><strong>Email:</strong> {{ editedRow.email }}</p>
      <p><strong>Endereço:</strong> {{ editedRow.address }}</p>
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
const editedRow = ref(null);
const editTime = ref(null);

const generateData = () => {
  return Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    address: faker.location.streetAddress(),
  }));
};

data.value = generateData();

const editRandomRow = () => {
  const startTime = performance.now();

  const randomIndex = Math.floor(Math.random() * data.value.length);
  data.value[randomIndex] = {
    ...data.value[randomIndex],
    name: faker.person.fullName(),
    email: faker.internet.email(),
    address: faker.location.streetAddress(),
  };
  editedRow.value = data.value[randomIndex];

  const endTime = performance.now();
  editTime.value = endTime - startTime;
};
</script>

