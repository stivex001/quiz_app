import { Board, Container, Desc, LinkItem, Linkk } from "./home.styles";

const Home = () => {
  return (
    <Container>
      <Desc>
        Goreeva Quiz Hub is a web-based Audience Engagement Cloud Platform for
        hosting interactive trivia quizzes at in-person, virtual, and hybrid
        events. No app install is required
      </Desc>
      <LinkItem>
        <Linkk type="create" to="/new-quiz">
          Create Your Quiz
        </Linkk>
        <Linkk to="/demo-quiz">Demo Quiz</Linkk>

      </LinkItem>
      <Board to="/quiz-data">Question Board</Board>
    </Container>
  );
};

export default Home;
