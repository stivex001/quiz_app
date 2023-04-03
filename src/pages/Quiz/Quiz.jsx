import { Button, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import hero from "../../assets/hero.png";
import Categories from "../../Data/categories";
import {
  Container,
  ErrorMessage,
  Forms,
  Img,
  ImgContainer,
  Settings,
  Span,
} from "./quiz.styles";

const Quiz = ({ name, setName, fetchQuestions }) => {
  // const [category, setCategory] = useState("");
  // const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if ( !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions();
      navigate("/quiz");
    }
  };

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
           
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
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
