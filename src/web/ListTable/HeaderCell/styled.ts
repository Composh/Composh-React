import styled,
{
  css,
} from 'styled-components';



export interface IProps {
  width?: number | string;
}



export const MaxWidthStyle = css<IProps>`
  width: ${(props: IProps) => typeof props.width === 'number' ? `${props.width}px` : props.width || 'auto'};
  min-width: ${(props: IProps) => typeof props.width === 'number' ? `${props.width}px` : props.width || 'auto'};
  max-width: ${(props: IProps) => typeof props.width === 'number' ? `${props.width}px` : props.width || 'auto'};
`;

export const Coluna = styled.div<IProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;

  ${(props: IProps) => props.width && MaxWidthStyle}
`;

export const ColunaText = styled.p`
  font-size: 13px;
  text-align: center;
`;
