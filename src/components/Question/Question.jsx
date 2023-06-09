import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./Question.css";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ErrorMessage = styled.p`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  background-color: orangered;
  text-align: center;
  color: #fff;
  text-transform: capitalize;
`;

const Question = ({
  currentQuestion,
  setcurrentQuestion,
  questions,
  options,
  correct,
  score,
  setScore,
  isLastQuestion,
}) => {
  const [selected, setselected] = useState();
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSelect = (option) => {
    if (selected === option && selected === correct) {
      return "select";
    } else if (selected === option && selected !== correct) {
      return "wrong";
    } else if (option === correct) {
      return "select";
    }
  };

  const handleCheck = (i) => {
    setselected(i);
    if (i === correct) {
      setScore(score + 1);
      // setTimeout(() => setcurrentQuestion(currentQuestion + 1), 10000);
    }
    setError(false);
  };

  const handleQuit = () => {
    navigate("/");
  };

  const handleNext = () => {
    if (currentQuestion === questions.length - 1) {
      navigate("/result");
    } else if (selected) {
      setcurrentQuestion(currentQuestion + 1);
      setselected();
    } else {
      setError("Plese select an option first");
    }
  };

  return (
    <Container>
      <h1>
        Question {currentQuestion + 1} / {questions.length}{" "}
      </h1>
      <div className="singleQuestion">
        <h2> {questions[currentQuestion]?.question} </h2>
        <div className="options">
          {error && <ErrorMessage>Plese select an option first</ErrorMessage>}

          {options &&
            options.map((option, index) => (
              <button
                onClick={() => handleCheck(option)}
                key={index}
                disabled={selected}
                className={`singleOption ${selected && handleSelect(option)}`}
              >
                {option}
              </button>
            ))}
        </div>

        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={handleQuit}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {isLastQuestion ? "Finish Quiz" : "Next Question"}
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Question;
