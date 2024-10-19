"use client";

import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

const DeleteRows = () => {
  const [data, setData] = useState([]);
  const [deletionTime, setDeletionTime] = useState(null);

  useEffect(() => {
    const generateData = () => {
      let rows = [];
      for (let i = 0; i < 10000; i++) {
        rows.push({
          id: i + 1,
          name: faker.person.fullName(),
          email: faker.internet.email(),
          address: faker.location.streetAddress(),
        });
      }
      return rows;
    };

    const rows = generateData();
    setData(rows);
  }, []);

  const deleteRows = () => {
    const startTime = performance.now();

    const remainingData = data.slice(1000);
    setData(remainingData);

    const endTime = performance.now();
    setDeletionTime(endTime - startTime);
  };

  return (
    <div>
      <h3>Deleção de 1.000 linhas</h3>
      {deletionTime && <p>Tempo de deleção: {deletionTime} ms</p>}
      <button onClick={deleteRows}>Deletar 1.000 Linhas</button>

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

export default DeleteRows;
