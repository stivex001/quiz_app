import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

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

const QuizData = ({ questions, isLoading, error }) => {
  const { Id } = useParams();

  const editQUiz = questions?.find((question) => question?.id === Id);
  const [data, setData] = useState();

  const firebaseEndpoint = `https://quiz-app-c5011-default-rtdb.firebaseio.com/quizes/${Id}.json`;
  const confirmed = window.confirm(
    "Are you sure you want to delete this item?"
  );

  const handleDelete = (id) => {
    if (confirmed) {
      axios
        .delete(firebaseEndpoint)
        .then((response) => {
          setData(data.filter((item) => item.id !== id));
          toast.success("Quiz deleted successfully");
          // setTimeout(() => navigate("/quiz-data"), 5000);
        })

        .catch((error) => console.log(error));
    }
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
    <div>
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
          {questions?.map((item) => (
            <tr key={item.id}>
              <td>{item.question}</td>
              <td>{item.options.join(", ")}</td>
              <td>{item.answer}</td>
              <td>{item.category}</td>
              <td>
                <Link to={`/edit/${item.id}`}>Edit</Link>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button>Hompage</button>
      <button>Add More</button>
    </div>
  );
};

export default QuizData;
