import { Button, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import hero from "../../assets/hero.png";
import Categories from "../../Data/categories";
import { mobile } from "../../responsive";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  ${mobile({ flexDirection: "column-reverse", alignItems: "center" })}
`;
const Settings = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  font-weight: 300;
  ${mobile({ width: "100%" })}
`;
const Span = styled.span`
  font-size: 30px;
`;
const ImgContainer = styled.div`
  flex: 1.5;
`;
const Img = styled.img`
  width: 70%;
  align-self: center;
  padding: 8px;
  ${mobile({ width: "85%", padding: "20px 0 0 0 " })}
`;

const Forms = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  flex: 0.8;
  gap: 50px;
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

const Quiz = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true)
      return;
    }
    else {
      setError(false)
      fetchQuestions(category, difficulty)
      navigate('/quiz')
    }
  }

  return (
    <Container>
      <Settings>
        <Span>Quiz Settings</Span>
        <Forms>
          {error && <ErrorMessage>Please Fill all the Fields</ErrorMessage>}
          <TextField
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <TextField
            select
            label="Select Category"
            variant="outlined"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            style={{ backgroundColor: "#5779c4" }}
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </Forms>
      </Settings>
      <ImgContainer>
        <Img src={hero} alt="quiz-image" />
      </ImgContainer>
    </Container>
  );
};

export default Quiz;
