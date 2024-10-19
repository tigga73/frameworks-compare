<template>
  <div>
    <h3>Deleção de 1.000 linhas</h3>
    <p v-if="deletionTime">Tempo de deleção: {{ deletionTime }} ms</p>
    <button @click="deleteRows">Deletar 1.000 Linhas</button>

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
const deletionTime = ref(null);

const generateData = () => {
  return Array.from({ length: 10000 }, (_, i) => ({
    id: i + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    address: faker.location.streetAddress(),
  }));
};

data.value = generateData();

const deleteRows = () => {
  const startTime = performance.now();
  data.value = data.value.slice(1000); 
  const endTime = performance.now();
  deletionTime.value = endTime - startTime;
};
</script>

