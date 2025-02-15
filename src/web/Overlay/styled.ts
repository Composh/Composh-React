import styled,
{
  css,
} from 'styled-components';



export interface IProps {
  backgroundColor?: string;
}



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
  z-index: 99998;
`;


export const OverlayTouchable = styled.a<IProps>`
  ${OverlayStyle};

  background-color: ${(props: IProps) => props.backgroundColor};
  cursor: pointer;
`;


export const OverlayView = styled.div`
  ${OverlayStyle};
`;


export const OverlayChildren = styled.div`
  ${OverlayStyle};
  z-index: 99999 !important;
`;
