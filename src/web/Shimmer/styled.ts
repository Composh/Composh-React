import styled,
{
  css,
} from 'styled-components';



export interface IProps {
  visible?: boolean;
  width?: any;
  widthFull?: boolean;
  height?: any;
  borderRadius?: any;
}



export const ShimmerContainerStyle = css<IProps>`
  width: ${(props: IProps) => props.widthFull
    ? '100%'
    : (props.width + 'px') || (100 + 'px')};
  height: ${(props: IProps) => props.height || 50}px;
`;

export const ShimmerContainer = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  ${(props: IProps) => !props.visible && ShimmerContainerStyle};
  border-radius: ${(props: IProps) => props.borderRadius}px;
`;



export const ShimmerChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
