"use client";

import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

const SelectRow = () => {
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectionTime, setSelectionTime] = useState(null);

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

    const rows = generateData();
    setData(rows);
  }, []);

  const selectRandomRow = () => {
    const startTime = performance.now();

    const randomIndex = Math.floor(Math.random() * data.length);
    const row = data[randomIndex];

    setSelectedRow(row);

    const endTime = performance.now();
    setSelectionTime(endTime - startTime);
  };

  return (
    <div>
      <h3>Seleção de uma linha aleatória</h3>
      {selectionTime && <p>Tempo de seleção: {selectionTime} ms</p>}
      <button onClick={selectRandomRow}>Selecionar Linha Aleatória</button>

      {selectedRow && (
        <div>
          <h4>Linha Selecionada:</h4>
          <p>
            <strong>ID:</strong> {selectedRow.id}
          </p>
          <p>
            <strong>Nome:</strong> {selectedRow.name}
          </p>
          <p>
            <strong>Email:</strong> {selectedRow.email}
          </p>
          <p>
            <strong>Endereço:</strong> {selectedRow.address}
          </p>
        </div>
      )}

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

export default SelectRow;
