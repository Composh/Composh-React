import styled,
{
  css,
} from 'styled-components/native';



export const OverlayStyle = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  elevation: 0;
  zIndex: 0;
  
  justify-content: center;
  align-items: center;
`;


export const OverlayTouchable = styled.TouchableOpacity`
  ${OverlayStyle};
`;


export const OverlayView = styled.View`
  ${OverlayStyle};
`;


export const OverlayChildren = styled.View`
`;
