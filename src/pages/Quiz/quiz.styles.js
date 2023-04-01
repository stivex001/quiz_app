import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  ${mobile({ flexDirection: "column-reverse", alignItems: "center" })}
`;
export const Settings = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  font-weight: 300;
  ${mobile({ width: "100%" })}
`;
export const Span = styled.span`
  font-size: 30px;
`;
export const ImgContainer = styled.div`
  flex: 1.5;
`;
export const Img = styled.img`
  width: 70%;
  align-self: center;
  padding: 8px;
  ${mobile({ width: "85%", padding: "20px 0 0 0 " })}
`;

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  flex: 0.8;
  gap: 50px;
`;
export const ErrorMessage = styled.p`
width: 100%;
padding: 10px;
border-radius: 4px;
background-color: orangered;
text-align: center;
color: #fff;
text-transform: capitalize;
`;
