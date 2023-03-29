import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50vh;
  ${mobile({ margin: "auto"})}
`;
const Desc = styled.h1`
  color: #3f3a3a;
  font-size: 1.2rem;
  text-align: center;
  line-height: 2rem;
`;
const LinkItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 30px 0px;
  gap: 20px;
  ${mobile({ flexDirection: "column"})}
`;
const Linkk = styled(Link)`
  font-size: 15px;
  background-color: ${(prop) =>
    prop.type === "create" ? "#5777ba" : "#39445a93"};
  color: #fff;
  font-weight: bold;
  padding: 24px;
  width: 100%;
  text-align: center;
  border-radius: 50px;

  &:hover {
    background-color: ${(prop) =>
      prop.type === "create" ? "#1955cb92" : "#393b3f"};
    transition: all 0.5s;
  }
`;

const Home = () => {
  return (
    <Container>
      <Desc>
        Goreeva Quiz Hub is a web-based Audience Engagement Cloud Platform for
        hosting interactive trivia quizzes at in-person, virtual, and hybrid
        events. No app install is required
      </Desc>
      <LinkItem>
        <Linkk type="create" to='/new-quiz'>Create Your Quiz</Linkk>
        <Linkk to='/demo-quiz'>Demo Quiz</Linkk>
      </LinkItem>
    </Container>
  );
};

export default Home;
