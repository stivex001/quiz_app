import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header/Header";
import QuizEdit from "./pages/Edit/QuizEdit";
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
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const getQuiz = async () => {
      try {
        const res = await axios.get(
          "https://quiz-app-c5011-default-rtdb.firebaseio.com/quizes.json"
        );

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
            points: resData[key].points,
            time: resData[key].timeLimit,
          });
        }

        setQuestions(loadedQuiz);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    getQuiz();
  }, []);

  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/demo-quiz"
          element={<Quiz name={name} setName={setName} questions={questions} />}
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
              isLoading={isLoading}
              error={error}
            />
          }
        />
        <Route path="/result" element={<Result score={score} name={name} questions={questions} />} />
        <Route path="/edit/:Id" element={<QuizEdit questions={questions} />} />
      </Routes>
    </Container>
  );
}

export default App;
