import axios from "axios";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import NewQuiz from "./pages/Newquiz/NewQuiz";
import Quiz from "./pages/Quiz/Quiz";
import QuizGround from "./pages/Quiz/QuizGround";
import QuizData from "./pages/QuizTable/QuizData";
import Result from "./pages/Result/Result";

const Container = styled.div`
  min-height: 95vh;
  margin: 5px;
  padding: 5px;
  border: 8px solid #39445a93;
  background-image: url("https://img.freepik.com/free-vector/white-question-mark-background-minimal-style_1017-25235.jpg?w=2000");
  background-repeat: no-repeat;
  background-size: cover;
`;

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const res = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(res.data.results);
  };

  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/demo-quiz"
          element={
            <Quiz
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          }
        />
        <Route path="/new-quiz" element={<NewQuiz />} />
        <Route path="/quiz-data" element={<QuizData />} />
        <Route
          path="/quiz"
          element={
            <QuizGround
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          }
        />
        <Route path="/result" element={<Result score={score} name={name} />} />
      </Routes>
    </Container>
  );
}

export default App;
