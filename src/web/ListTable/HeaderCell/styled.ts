import styled,
{
  css,
} from 'styled-components';



export interface IProps {
  hasIconRight?: boolean;
  width?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
}



export const WidthStyle = css<IProps>`
  width: ${(props: IProps) => typeof props.width === 'number' ? `${props.width}px` : props.width || 'auto'};
  min-width: ${(props: IProps) => typeof props.width === 'number' ? `${props.width}px` : props.width || 'auto'};
  max-width: ${(props: IProps) => typeof props.width === 'number' ? `${props.width}px` : props.width || 'auto'};
`;

export const MinWidthStyle = css<IProps>`
  min-width: ${(props: IProps) => typeof props.minWidth === 'number' ? `${props.minWidth}px` : props.minWidth || 'auto'};
`;

export const MaxWidthStyle = css<IProps>`
  max-width: ${(props: IProps) => typeof props.maxWidth === 'number' ? `${props.maxWidth}px` : props.maxWidth || 'auto'};
`;

export const Coluna = styled.div<IProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;

  ${(props: IProps) => props.width && WidthStyle};
  ${(props: IProps) => props.minWidth && MinWidthStyle};
  ${(props: IProps) => props.maxWidth && MaxWidthStyle};
`;

export const ColunaText = styled.p<IProps>`
  margin-right: ${(props: IProps) => props.hasIconRight ? 5 : 0}px;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 13px;
  text-align: center;
`;
