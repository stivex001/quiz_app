import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50vh;
  ${mobile({ margin: "auto" })}
`;
export const Desc = styled.h1`
  color: #3f3a3a;
  font-size: 1.2rem;
  text-align: center;
  line-height: 2rem;
  max-width: 800px;
  margin: 70px auto 0;

`;
export const LinkItem = styled.div`
  display: flex;
  flex-wrap: wrap;
width: 100%;
  margin: 50px 30px 0px;
  gap: 20px;
  ${mobile({ flexDirection: "column" })}
`;
export const Linkk = styled(Link)`
  font-size: 15px;
  background-color: ${(prop) =>
    prop.type === "create" ? "#5777ba" : "#39445a93"};
  color: #fff;
  font-weight: bold;
  padding: 24px;
  width: 50%;
  text-align: center;
  border-radius: 50px;
  margin: auto;
  {mobile({ width: "100%" })}

  &:hover {
    background-color: ${(prop) =>
      prop.type === "create" ? "#1955cb92" : "#393b3f"};
    transition: all 0.5s;
  }
`;

export const Board = styled(Link)`
  font-size: 15px;
  background-color: #47536e;
  color: #fff;
  font-weight: bold;
  padding: 24px;
  width: 50%;
  text-align: center;
  border-radius: 50px;
  margin: auto;
  {mobile({ width: "100%" })}
  &:hover {
    background-color: rgba(71,83,110,0.7);
    transition: all 0.5s;
  }
`;
