import React from 'react';

import { Container } from './styled';


interface IProps {
  name?: string;
  label?: string;

  helpText?: string;
}



const Input: React.FC<IProps> = (props) => {
  return (
    <Container>
      <label>{props.label}</label>

      <input name={props.name} type="text" />

      <label>{props.helpText}</label>
    </Container>
  );
};



export default Input;
