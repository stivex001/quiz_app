import { Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 60vh;
  text-align: center;
  gap: 1.8rem;
`;
const Title = styled.span`
  font-weight: bold;
  font-size: 2rem;
`;

const Result = ({ name, score }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  return (
    <Container>
      <Title>Final Score : {score}</Title>
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
