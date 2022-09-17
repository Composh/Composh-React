import styled from 'styled-components';



export const GridIconContent = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70px;
  padding-top: 4px;
  padding-bottom: 4px;
  cursor: pointer;

  @media (max-width: 480px){
    flex: 1;
    max-width: 32%;
  }

  @media (min-width: 481px) and (max-width: 661px){
    flex: 1;
    max-width: 24%;
  }

  @media (min-width: 662px){
    flex: 1;
    max-width: 120px;
  }
`;

export const IconContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AvailableText = styled.p`
  margin-top: 6px;
  color: white;
  font-size: 12px;
  text-align: center;
`;
