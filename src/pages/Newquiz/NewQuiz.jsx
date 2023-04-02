import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Input, Label } from "./newQuz.styles";

const NewQuiz = () => {
  const [quizName, setQuizName] = useState("");
  const [points, setPoints] = useState("");
  const [timeLimit, setTimeLimit] = useState("");
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    const quizData = {
      quizName,
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
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="quiz-name">Quiz Name</Label>
      <Input
        id="quiz-name"
        type="text"
        value={quizName}
        onChange={(event) => setQuizName(event.target.value)}
        required
      />

      <Label htmlFor="description">Description</Label>
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

      <Label htmlFor="points">Points/Grading System</Label>
      <Input
        id="points"
        type="text"
        value={points}
        onChange={(event) => setPoints(event.target.value)}
        required
      />

      <Label htmlFor="time-limit">Time Limit</Label>
      <Input
        id="time-limit"
        type="text"
        value={timeLimit}
        onChange={(event) => setTimeLimit(event.target.value)}
        required
      />

      <Button type="submit">Create Quiz</Button>
    </Form>
  );
};

export default NewQuiz;
