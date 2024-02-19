import styled from "styled-components";

export const Form = styled.form`
    padding: 10px;
`

export const Fieldset = styled.fieldset`
    border-radius: 20px;
`

export const Display = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 40px;
  border: dashed black 2px;
  border-radius: 15px;
  max-width: 40%;
  margin: 0px auto;
  min-width: 230px;
`

export const Button = styled.button`
  background-color: teal;
  border: none;
  text-align: center;
  border-radius: 10px;
  font-size: 20px;
  color: white;
  padding: 5px;
  border: solid black;

  &:hover {
    background-color: rgb(0, 255, 255);
    color: black;
  }
`

export const ButtonSection = styled.div`
  text-align: center;
`