import React from 'react'
import styled from "styled-components";


  // Styled component named StyledButton
  const Button = styled.button`
  
    border: none;
    color: hsl(360, 71%, 66%);
    background-color:transparent;
    cursor: pointer;
    font-size: 1rem;
    font-weight:600;
    padding: 7px 10px;

    &:hover{
      color:hsl(360, 67%, 44%);
     }
   
  `;
  

export const StyledButton = ({children}) => {
  return  <Button>{children }</Button>;
  
}
