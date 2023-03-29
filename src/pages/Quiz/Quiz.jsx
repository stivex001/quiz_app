import { MenuItem, TextField } from "@mui/material";
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

const Quiz = () => {
  return (
    <Container>
      <Settings>
        <Span>Quiz Settings</Span>
        <Forms>
          <TextField label="Enter Your Name" variant="outlined" />

          <TextField select label="Select Category" variant="outlined">
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField select label="Select Difficulty" variant="outlined">
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
        </Forms>
      </Settings>
      <ImgContainer>
        <Img src={hero} alt="quiz-image" />
      </ImgContainer>
    </Container>
  );
};

export default Quiz;
