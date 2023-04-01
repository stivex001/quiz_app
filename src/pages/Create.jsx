import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const NewQuiz = () => {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");
  const [quizName, setQuizName] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState(0);
  const [timeLimit, setTimeLimit] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    const quizData = {
      quizName,
      description,
      question,
      options: [option1, option2, option3, option4],
      answer,
      points,
      timeLimit,
    };

    axios
      .post("<firebase-backend-url>", quizData)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    setQuestion("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    setAnswer("");
  };

  return (
    <FormContainer>
      <h2>Create a Quiz</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Quiz Name"
          value={quizName}
          onChange={(event) => setQuizName(event.target.value)}
          required
        />

        <Input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />

        <Input
          type="number"
          placeholder="Points/Grading System"
          value={points}
          onChange={(event) => setPoints(event.target.value)}
          required
        />

        <Input
          type="number"
          placeholder="Time Limit (in minutes)"
          value={timeLimit}
          onChange={(event) => setTimeLimit(event.target.value)}
          required
        />

        <Input
          type="text"
          placeholder="Question"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Option 1"
          value={option1}
          onChange={(event) => setOption1(event.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Option 2"
          value={option2}
          onChange={(event) => setOption2(event.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Option 3"
          value={option3}
          onChange={(event) => setOption3(event.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Option 4"
          value={option4}
          onChange={(event) => setOption4(event.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Answer"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          required
        />
        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default NewQuiz;
