import styled from 'styled-components';



export const Linha = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -1px;
  margin-bottom: -1px;
  padding-top: 12px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 12px;
  border-top-color: ${'#ddd'};
  border-top-style: solid;
  border-top-width: 0.5px;
  border-bottom-color: ${'#ddd'};
  border-bottom-style: solid;
  border-bottom-width: 0.5px;
`;


export const CelulaDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;


export const CelulaP = styled.p`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
`;
