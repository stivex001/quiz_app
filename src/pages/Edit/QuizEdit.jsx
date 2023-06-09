import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Board, Button, Form, Input, Label } from "../Newquiz/newQuz.styles";

const QuizEdit = ({ questions }) => {
  const navigate = useNavigate();
  const { Id } = useParams();

  const editQUiz = questions?.find((question) => question?.id === Id);

  const [quizName, setQuizName] = useState(editQUiz?.category);
  const [points, setPoints] = useState(editQUiz?.points);
  const [timeLimit, setTimeLimit] = useState(editQUiz?.timeLimit);
  const [question, setQuestion] = useState(editQUiz?.question);
  const [option1, setOption1] = useState(editQUiz?.options[0]);
  const [option2, setOption2] = useState(editQUiz?.options[1]);
  const [option3, setOption3] = useState(editQUiz?.options[2]);
  const [answer, setAnswer] = useState(editQUiz?.answer);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    const quizData = {
      quizName,
      question,
      options: [option1, option2, option3],
      answer,
    };

    if (quizData === "") {
      toast.error("You did not make any changes");
    } else {
      const firebaseEndpoint = `https://quiz-app-c5011-default-rtdb.firebaseio.com/quizes/${Id}.json`;

      axios
        .put(firebaseEndpoint, quizData)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      toast.success("Changes Made Successfully!!");
      setTimeout(() => navigate("/quiz-data"), 5000);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ToastContainer />
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
        placeholder="1"
      />

      <Label htmlFor="time-limit">Time Limit</Label>
      <Input
        id="time-limit"
        type="text"
        value={timeLimit}
        onChange={(event) => setTimeLimit(event.target.value)}
        placeholder="30"
      />

      <Button type="submit">Submit</Button>
      <Board onClick={() => navigate(-1)}>Go Back</Board>
    </Form>
  );
};

export default QuizEdit;
