import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Question from "../../components/Question/Question";
import Timer from "../../components/Timer/Timer";
import { Board, Container, CountDown, Info, Span } from "./quizGround.styles";

const QuizGround = ({ name, score, setScore,  }) => {
  const [options, setOptions] = useState([]);
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("https://quiz-app-c5011-default-rtdb.firebaseio.com/quizes.json");
        const data = response.data;
        const fetchedQuestions = [];
        for (const key in data) {
          fetchedQuestions.push({
            id: key,
            ...data[key],
          });
        }
        setQuestions(fetchedQuestions);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setOptions(
      questions &&
        shuffleHandler([
          questions[currentQuestion]?.answer,
          ...(questions[currentQuestion]?.options || []),
        ])
    );
  }, [questions, currentQuestion]);

  const shuffleHandler = (option) => {
    return option.sort(() => Math.random() - 0.5);
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
    <Container>
      <Span>
        Welcome, <span style={{ color: "#5777ba" }}>{name}</span>
      </Span>
      {questions ? (
        <>
          <Info>
            <Board>{questions[currentQuestion]?.category}</Board>

            <Board>
              Score :{" "}
              <span style={{ color: "#5777ba", fontSize: "1.3rem" }}>
                {score}
              </span>
            </Board>
          </Info>
          <CountDown>
            <Timer
              setcurrentQuestion={setcurrentQuestion}
              currentQuestion={currentQuestion}
              questions={questions}
            />
          </CountDown>
          <Question
            currentQuestion={currentQuestion}
            setcurrentQuestion={setcurrentQuestion}
            questions={questions}
            options={options}
            correct={questions[currentQuestion]?.answer}
            score={score}
            setScore={setScore}
            isLastQuestion={currentQuestion === questions.length - 1}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </Container>
  );
};

export default QuizGround;
