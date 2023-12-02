import styled,
{
  css,
} from 'styled-components';

import {
  GetPlatform,
} from '../../configs/plataform.config';



export const ScrollbarHideStyle = css`
  ::-webkit-scrollbar {
    display: none;
  }
`;


export const ScrollbarProfileStyle = css`
  margin-top: -4px;
  padding-bottom: 0;

  ::-webkit-scrollbar {
    height: 9px;
  }

  ::-webkit-scrollbar-track,
  ::-webkit-scrollbar {
    background: ${'#000000'};
  }

  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 10px 10px ${'#ffffff'};

    border-color: ${'#000000'};
    border-style: solid;
    border-top-width: 1px;
    border-left-width: 10px;
    border-right-width: 10px;
    border-bottom-width: 4px;
  }
`;

export const ScrollHorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  
  ${GetPlatform() === 'WEB' ? ScrollbarProfileStyle : ScrollbarHideStyle}
`;
