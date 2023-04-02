import React, { useState } from "react";
import styled from "styled-components";
import { quizData } from "../../Data/questions";

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  th,
  td {
    padding: 0.5rem;
    text-align: left;
    border: 1px solid #ccc;
  }
  th {
    background-color: #f2f2f2;
  }
  td button {
    margin-right: 0.5rem;
  }
`;

const QuizData = () => {
  const [data, setData] = useState(quizData);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    // Implement edit functionality here
    console.log(`Edit ${id}`);
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>Question</th>
          <th>Options</th>
          <th>Answer</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.question}</td>
            <td>{item.options.join(", ")}</td>
            <td>{item.answer}</td>
            <td>{item.category}</td>
            <td>
              <button onClick={() => handleEdit(item.id)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default QuizData;
