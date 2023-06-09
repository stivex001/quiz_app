import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Board, Button, Form, Input, Label } from "./newQuz.styles";

const NewQuiz = () => {
  const [quizName, setQuizName] = useState("");
  const [points, setPoints] = useState("");
  const [timeLimit, setTimeLimit] = useState("");
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    const quizData = {
      quizName,
      question,
      options: [option1, option2, option3],
      answer,
      points,
      timeLimit,
    };

    axios
      .post(
        "https://quiz-app-c5011-default-rtdb.firebaseio.com/quizes.json",
        quizData
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    toast.success("Quiz Created Successfully!!");
    setTimeout(() => navigate("/quiz-data"), 5000);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ToastContainer />
      <Label htmlFor="quiz-name">Quiz Name</Label>
      <Input
        id="quiz-name"
        placeholder=" Sport, Politics, General Knowledge etc"
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
        placeholder="Option 4 (Answer)"
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
        placeholder="1"
      />

      <Label htmlFor="time-limit">Time Limit</Label>
      <Input
        id="time-limit"
        type="text"
        value={timeLimit}
        onChange={(event) => setTimeLimit(event.target.value)}
        placeholder="e.g 30, 60 "
      />

      <Button type="submit">Create Quiz</Button>
      <Board onClick={() => navigate(-1)}>Go Back</Board>
    </Form>
  );
};

export default NewQuiz;
