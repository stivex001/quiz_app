import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Question from "../../components/Question/Question";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Span = styled.span`
  font-size: 25px;
  border: 1px solid black;
  box-shadow: 4px 4px 2px black;
  padding: 5px 10px;
`;
const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  text-transform: uppercase;
  margin: 30px 20px;
`;
const Board = styled.span`
  color: #54575e;
  font-weight: bold;
`;

const QuizGround = ({ name, questions, score, setScore }) => {
  const [options, setOptions] = useState();
  const [currentQuestion, setcurrentQuestion] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        shuffleHandler([
          questions[currentQuestion]?.correct_answer,
          ...questions[currentQuestion]?.incorrect_answers,
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
