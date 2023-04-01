import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Question from "../../components/Question/Question";
import { Board, Container, Info, Span } from "./quizGround.styles";

const QuizGround = ({ name, questions, score, setScore }) => {
  const [options, setOptions] = useState();
  const [currentQuestion, setcurrentQuestion] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        shuffleHandler([
          questions[currentQuestion]?.correct_answer,
          ...(questions[currentQuestion]?.incorrect_answers || []),
        ])
    );
  }, [questions, currentQuestion]);

  const shuffleHandler = (option) => {
    return option.sort(() => Math.random() - 0.5);
  };

  return (
    <Container>
      <Span>Welcome, {name}</Span>
      {questions ? (
        <>
          <Info>
            <Board>{questions[currentQuestion]?.category}</Board>
            <Board>Score : {score}</Board>
          </Info>

          <Question
            currentQuestion={currentQuestion}
            setcurrentQuestion={setcurrentQuestion}
            questions={questions}
            options={options}
            correct={questions[currentQuestion]?.correct_answer}
            score={score}
            setScore={setScore}
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
