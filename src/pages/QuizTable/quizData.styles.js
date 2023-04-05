import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../responsive";

export const ActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
export const EditLink = styled(Link)`
  background-color: #5777ba;
  color: #fff;
  padding: 6px 10px;
  border-radius: 5px;

  &:hover {
    background-color: #4c7bdf;
  }
`;
export const Btn = styled.button`
  background-color: #a83535;
  border: none;
  padding: 6px 10px;
  border-radius: 5px;
  cursor: pointer;
  color: #decaca;

  &:hover {
    background-color: #9c2444;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px;
  ${mobile({flexDirection: 'column'})}
`;
