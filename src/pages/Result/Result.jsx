import { Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Span } from "../Quiz/quizGround.styles";
import { Container, Title } from "./result.styles";

const Result = ({ name, score, questions }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  return (
    <Container>
      <Title>
        Welldone <Span style={{ color: "#5777ba" }}>{name} </Span>
      </Title>
      <Title>
        {" "}
        Your Final Score :{" "}
        <Span style={{ color: "#5777ba", border: "none" }}>
          {score} / {questions.length - 1}
        </Span>
      </Title>
      <Button
        variant="contained"
        size="large"
        style={{
          alignSelf: "center",
          marginTop: 20,
          backgroundColor: "#5777ba",
          color: "#fff",
        }}
        href="/"
      >
        {" "}
        Go To Hompage{" "}
      </Button>
    </Container>
  );
};

export default Result;
