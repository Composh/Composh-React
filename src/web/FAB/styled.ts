import styled from 'styled-components';

import color from 'color';



interface IProps {
  backgroundColor?: string;
}



export const FABContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 56px;
  height: 56px;
  padding: 0px;
  background-color: ${(props: IProps) => props.backgroundColor};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
  cursor: pointer;
  z-index: 1050;

  :hover {
    background-color: ${(props: IProps) => color(props.backgroundColor).darken(0.2).toString()};
  }
`;
