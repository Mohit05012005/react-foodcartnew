import React from 'react'
import styled from 'styled-components';
const Button = ({text,onClick}) => {
  return (
    <ButtonContainer>
      <button onClick={onClick}>{text}</button>
    </ButtonContainer>
  )
}

export default Button;
const ButtonContainer = styled.div`
border-radius: 5px;
button{
    background-color: red;
    color: white;
    cursor: pointer;
    padding: 6px;
    }
`
