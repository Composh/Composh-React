import styled,
{
  css,
} from 'styled-components';

const DEFAULT_TEAR_SIZE = 10;
const DEFAULT_TEAR_COLOR = '#FFFFFF';
const DEFAULT_BACKGROUND_COLOR = '#CCCCCC';



export interface IProps {
  width?: any,
  height?: any,
  marginRight?: any,
  backgroundColor?: any,
  marginLeft?: any,
}



export const TearContainerCss = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  align-self: center;
`;

export const TearItemCss = css`
  display: flex;
  flex-direction: column;

  transform: rotate(45deg);
`;

export const TearEndsCss = css`
  display: flex;
  flex-direction: column;
  z-index: 100;
`;


export const ShapeInfo = styled.div`
  ${TearContainerCss};
`;

export const ShapeTearComponent1 = styled.div<IProps>`
  ${TearItemCss};

  ${(props: IProps) => props.width && `width: ${props.width || DEFAULT_TEAR_SIZE}px`};
  ${(props: IProps) => props.height && `height: ${props.height || DEFAULT_TEAR_SIZE}px`};
  ${(props: IProps) => props.marginRight && `margin-right: ${props.marginRight}px`};
  ${(props: IProps) => props.backgroundColor && `background-color: ${props.backgroundColor || DEFAULT_TEAR_COLOR}`};
`;

export const ShapeItemTear = styled.div<IProps>`
  ${TearItemCss};

  ${(props: IProps) => props.width && `width: ${props.width || DEFAULT_TEAR_SIZE}px`};
  ${(props: IProps) => props.height && `height: ${props.height || DEFAULT_TEAR_SIZE}px`};
  ${(props: IProps) => props.backgroundColor && `background-color: ${props.backgroundColor || DEFAULT_TEAR_COLOR}`};
`;

export const ShapeTearComponent2 = styled.div<IProps>`
  ${TearEndsCss};

  ${(props: IProps) => props.width && `width: ${props.width || DEFAULT_TEAR_SIZE}px`};
  ${(props: IProps) => props.height && `height: ${props.height || DEFAULT_TEAR_SIZE * 1.5}px`};
  ${(props: IProps) => props.marginLeft && `margin-left: ${props.marginLeft}px`};
  ${(props: IProps) => props.backgroundColor && `background-color: ${props.backgroundColor || DEFAULT_BACKGROUND_COLOR}`};
`;
