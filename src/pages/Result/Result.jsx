import { Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
      <Title>Final Score : {score} / {questions.length}</Title>
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
