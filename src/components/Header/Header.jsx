import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Links = styled(Link)`
  text-transform: uppercase;
  font-size: 30px;
  color: #5777ba;
`;
const Hr = styled.hr`
  margin: 10px;
  width: 100%;
`;

const Header = () => {
  return (
    <Container>
      <Links to="/">Goreeva Quiz Hub</Links>
      <Hr />
    </Container>
  );
};

export default Header;
