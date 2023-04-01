import { Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: center;
height: 60vh;
text-align: center;
`;
const Title = styled.span``;

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
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      > Go To Hompage </Button>
    </Container>
  );
};

export default Result;
