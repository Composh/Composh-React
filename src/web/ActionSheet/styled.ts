import styled from 'styled-components';



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  elevation: 0;
  
  justify-content: flex-end;
  z-index: 9999;
`;

export const Wrapper = styled.div`
  z-index: 9999;
  background-color: black;
`;
