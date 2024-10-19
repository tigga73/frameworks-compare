"use client";

import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

const UpdateRows = () => {
  const [data, setData] = useState([]);
  const [updateTime, setUpdateTime] = useState(null);

  useEffect(() => {
    const generateData = () => {
      let rows = [];
      for (let i = 0; i < 1000; i++) {
        rows.push({
          id: i + 1,
          name: faker.person.fullName(),
          email: faker.internet.email(),
          address: faker.location.streetAddress(),
        });
      }
      return rows;
    };

    const initialData = generateData();
    setData(initialData);
  }, []);

  const updateRows = () => {
    const startTime = performance.now();

    const updatedData = [...data];
    for (let i = 0; i < 100; i++) {
      const randomIndex = Math.floor(Math.random() * updatedData.length);
      updatedData[randomIndex] = {
        ...updatedData[randomIndex],
        name: faker.person.fullName(),
        email: faker.internet.email(),
        address: faker.location.streetAddress(),
      };
    }

    setData(updatedData);

    const endTime = performance.now();
    setUpdateTime(endTime - startTime);
  };

  return (
    <div>
      <h3>Atualização de 1000 linhas</h3>
      {updateTime && <p>Tempo de atualização: {updateTime} ms</p>}
      <button onClick={updateRows}>Atualizar 100 linhas aleatórias</button>
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
    </div>
  );
};

export default UpdateRows;
