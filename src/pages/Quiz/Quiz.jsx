import styled from "styled-components";
import hero from '../../assets/hero.png'
import { mobile } from "../../responsive";

const Container = styled.div`
display: flex;
justify-content: space-around;
/* align-items: center; */
${mobile({ flexDirection: "column-reverse", alignItems: "center"})}
`;
const Settings = styled.div`
padding: 10px;
display: flex;
flex-direction: column;
flex: 1;
align-items: center;
font-weight: 300;
${mobile({ width: "100%"})}
`;
const Span = styled.span`
font-size: 30px;
`;
const ImgContainer = styled.div`
flex: 2;
`;
const Img = styled.img`
width: 100%;
align-self: center;
padding: 8px;
${mobile({ width: "85%", padding: "20px 0 0 0 "})}
`;

const Quiz = () => {
  return (
    <Container>
      <Settings>
        <Span>Quiz Settings</Span>
      </Settings>
      <ImgContainer>
        <Img src={hero} alt="quiz-image" />
      </ImgContainer>
    </Container>
  );
};

export default Quiz;
