import styled,
{
  css,
} from 'styled-components';



export const OverlayStyle = css`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  elevation: 0;
  
  justify-content: center;
  align-items: center;
  z-index: 9998;
`;


export const OverlayTouchable = styled.a`
  ${OverlayStyle};
`;


export const OverlayView = styled.div`
  ${OverlayStyle};
`;


export const OverlayChildren = styled.div`
  z-index: 9999 !important;
`;
