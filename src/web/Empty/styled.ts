import styled from 'styled-components';

import {
  Colors,
} from '../../constants';



export const EmptyContentView = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 50px;
  padding-right: 50px;
`;

export const EmptyImage = styled.img`
  height: 160px;
  width: 160px;
  object-fit: cover;
  pointer-events: none;
`;

export const EmptyTitle = styled.h1`
  margin-top: 20px;
  min-height: 45px;
  margin-left: 20px;
  margin-right: 20px;
  color: ${Colors.GREY};
  font-style: italic;
  text-align: center;
  pointer-events: none;
`;

export const EmptyDescription = styled.p`
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  color: ${Colors.GREY};
  color: gray;
  font-style: italic;
  font-weight: 100;
  text-align: center;
  pointer-events: none;
`;


export const EmptyButtonView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
