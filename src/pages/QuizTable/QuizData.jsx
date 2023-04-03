import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
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
  const [quiz, setQuiz] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const getQuiz = async () => {
      const res = await axios.get(
        "https://quiz-app-c5011-default-rtdb.firebaseio.com/quizes.json"
      );
console.log(res);
      if (res.statusText !== "OK") {
        throw new Error("Something went wrong");
      }
      const resData = await res.data;

      const loadedQuiz = [];

      for (const key in resData) {
        loadedQuiz.push({
          id: key,
          category: resData[key].quizName,
          question: resData[key].question,
          options: resData[key].options,
          answer: resData[key].answer,
        });
      }

      setQuiz(loadedQuiz);
      setIsLoading(false);
    };

    getQuiz().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    // Implement edit functionality here
    alert('Are You sure you want to delete this item?');
    console.log(`Edit ${id}`);
  };

  if (isLoading) {
    return (
      <CircularProgress
        style={{ margin: 100 }}
        color="inherit"
        size={150}
        thickness={1}
      />
    );
  }

  if (error) {
    return (
      <>
        <p>{error}</p>
      </>
    );
  }

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
        {quiz.map((item) => (
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
