import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 400px;
  margin: auto;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 18px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  padding: 8px;
  font-size: 16px;
`;

export const Textarea = styled.textarea`
  border: 1px solid #ccc;
  padding: 8px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 18px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }
`;
