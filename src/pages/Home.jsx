import styled from "styled-components"

const Container = styled.div`
min-height: 95vh;
margin: 5px;
padding: 5px;
border: 8px solid #39445a93;
background-image: url('https://img.freepik.com/free-vector/white-question-mark-background-minimal-style_1017-25235.jpg?w=2000');
background-repeat: no-repeat;
  background-size: cover;
`;

const Home = () => {
  return (
    <Container>Home</Container>
  )
}

export default Home