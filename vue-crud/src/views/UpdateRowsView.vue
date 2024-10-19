<template>
  <div>
    <h3>Atualização de 100 linhas aleatórias</h3>
    <button @click="updateRows">Atualizar 100 Linhas</button>
    <p v-if="updateTime">Tempo de atualização: {{ updateTime }} ms</p>
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
const updateTime = ref(null);

const generateData = () => {
  return Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    address: faker.location.streetAddress(),
  }));
};

data.value = generateData();

const updateRows = () => {
  const startTime = performance.now();

  for (let i = 0; i < 100; i++) {
    const randomIndex = Math.floor(Math.random() * data.value.length);
    data.value[randomIndex] = {
      ...data.value[randomIndex],
      name: faker.person.fullName(),
      email: faker.internet.email(),
      address: faker.location.streetAddress(),
    };
  }

  const endTime = performance.now();
  updateTime.value = endTime - startTime;
};
</script>

