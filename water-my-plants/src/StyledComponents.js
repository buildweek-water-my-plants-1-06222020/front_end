import { Form, Field } from "formik";
import styled from "styled-components";

export const FormDiv = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 1.5rem 0;
  margin: 3rem auto;
  background-image: url("http://barushe1987.sweb.cz/Screen%20Shot%202020-06-22%20at%208.42.29%20PM.png");
  background-size: cover;
  border: 1px solid green;
  border-radius: .5rem;
  -webkit-box-shadow:0 1rem 1rem black;
  -moz-box-shadow:0 2rem 2rem black;
  box-shadow:0 1rem 1rem black;
`;

export const Heading = styled.h1`
  color: #008ada;
  font-size: 2rem;
  font-weight: 300;
  text-align: center;
  padding-top: 4rem;
`;

export const Input = styled(Field)`
  margin: 1rem auto;
  width: 70%;
  height: 2rem;
  border: none;
  padding: 0.5rem;
  font-size: 1.5rem;
  background-color: #c8ddea;
  color: black;
  border: 1px solid green;
  &::placeholder {
    color: black;
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  height: 2.5rem;
  margin: 0.5rem auto;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  text-align: center;
  text-decoration: none;
  border: none;
  background-color: #9cc8e3;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: gray;
    color: white;
  }
`;

export const Error = styled.p`
  width: 70%;
  height: 1rem;
  font-size: 0.3rem;
  text-align: center;
  color: white;
  background-color: #004a19;
  border-color: #008ada;
  padding: 5px 10px;
  margin: -8px auto -1rem;
  
`;
