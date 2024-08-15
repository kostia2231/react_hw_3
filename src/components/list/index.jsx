import { useState } from "react";

export default function List() {
  const [people, setPeople] = useState([
    { id: 1, name: "Иван", age: 20 },
    { id: 2, name: "Мария", age: 22 },
    { id: 3, name: "Алексей", age: 21 },
    { id: 4, name: "Марина", age: 19 },
    { id: 5, name: "Даша", age: 23 },
    { id: 6, name: "Глеб", age: 24 },
    { id: 7, name: "Дима", age: 18 },
    { id: 8, name: "Гриша", age: 20 },
    { id: 9, name: "Серафим", age: 21 },
  ]);

  const handleDelete = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <div>
      <h1>Список приглашенных:</h1>
      <br />
      <ul style={{ display: "grid", gap: "1rem" }}>
        {people.map((person) => (
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "50px",
              border: "1px solid lightgray",
              borderRadius: "50px",
              padding: "10px",
            }}
            key={person.id}
          >
            <span>
              {person.id}. {person.name}, {person.age} лет
            </span>
            <button
              onClick={() => handleDelete(person.id)}
              style={{ width: "200px" }}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
