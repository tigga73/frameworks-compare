"use client";

import { useState } from "react";
import { faker } from "@faker-js/faker";

const CreateRows = () => {
  const [data, setData] = useState([]);
  const [creationTime, setCreationTime] = useState(null);

  // Função para criar 10.000 novas linhas
  const createRows = () => {
    const startTime = performance.now();

    const newData = [];
    for (let i = 0; i < 10000; i++) {
      newData.push({
        id: i + 1,
        name: faker.person.fullName(),
        email: faker.internet.email(),
        address: faker.location.streetAddress(),
      });
    }

    setData(newData);

    const endTime = performance.now();
    setCreationTime(endTime - startTime);
  };

  return (
    <div>
      <h3>Criação de 10.000 novas linhas</h3>
      {creationTime && <p>Tempo de criação: {creationTime} ms</p>}
      <button onClick={createRows}>Criar 10.000 Linhas</button>

      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Endereço</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CreateRows;
