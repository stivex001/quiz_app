import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Span = styled.span`
  font-size: 25px;
  border: 1px solid black;
  box-shadow: 4px 4px 2px black;
  padding: 5px 10px;
  text-transform: uppercase;
  font-weight: bold;
`;
export const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  text-transform: uppercase;
  margin: 30px 20px;
`;
export const Board = styled.span`
  color: #54575e;
  font-weight: bold;
`;

export const CountDown = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid #5777ba;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
`;
