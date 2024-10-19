"use client"; // Certifica que o componente seja um Client Component

import { useState } from "react";
import { faker } from "@faker-js/faker";

const LoadRows = () => {
  const [data, setData] = useState([]);
  const [loadingTime, setLoadingTime] = useState(null);

  const generateData = () => {
    let rows = [];
    const startTime = performance.now();
    for (let i = 0; i < 1000; i++) {
      rows.push({
        id: i + 1,
        name: faker.person.fullName(),
        email: faker.internet.email(),
        address: faker.location.streetAddress(),
      });
    }
    setData(rows);
    const endTime = performance.now();
    setLoadingTime(endTime - startTime);
    return rows;
  };
  return (
    <div>
      <h3>Carregamento de 1000 linhas</h3>
      {loadingTime && <p>Tempo de carregamento: {loadingTime} ms</p>}
      <button onClick={generateData}>Selecionar Linha Aleatória</button>

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

export default LoadRows;
