"use client";

import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

const EditRow = () => {
  const [data, setData] = useState([]);
  const [editTime, setEditTime] = useState(null);
  const [editedRow, setEditedRow] = useState(null);

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

  const editRandomRow = () => {
    const startTime = performance.now();

    const randomIndex = Math.floor(Math.random() * data.length);
    const updatedData = [...data];

    updatedData[randomIndex] = {
      ...updatedData[randomIndex],
      name: faker.person.fullName(),
      email: faker.internet.email(),
      address: faker.location.streetAddress(),
    };

    setEditedRow(updatedData[randomIndex]);
    setData(updatedData);

    const endTime = performance.now();
    setEditTime(endTime - startTime);
  };

  return (
    <div>
      <h3>Edição de uma linha aleatória</h3>
      {editTime && <p>Tempo de edição: {editTime} ms</p>}
      <button onClick={editRandomRow}>Editar Linha Aleatória</button>

      {editedRow && (
        <div>
          <h4>Linha Editada:</h4>
          <p>
            <strong>ID:</strong> {editedRow.id}
          </p>
          <p>
            <strong>Nome:</strong> {editedRow.name}
          </p>
          <p>
            <strong>Email:</strong> {editedRow.email}
          </p>
          <p>
            <strong>Endereço:</strong> {editedRow.address}
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

export default EditRow;
