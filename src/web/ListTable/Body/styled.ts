import styled,
{
  css,
} from 'styled-components';



export interface IProps {
  width?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
  backgroundColor?: string;
}



export const Linha = styled.div<IProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: -0.5px;
  margin-bottom: -0.5px;
  padding-top: 12px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 12px;
  background-color: ${(props: IProps) => props.backgroundColor};
`;



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

export const CelulaDiv = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  ${(props: IProps) => props.width && WidthStyle};
  ${(props: IProps) => props.minWidth && MinWidthStyle};
  ${(props: IProps) => props.maxWidth && MaxWidthStyle};
`;


export const CelulaDataPText = styled.p`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 13px;
  text-align: center;
`;


export const CelulaNoDataText = styled.p`
  width: 100%;
  font-size: 14px;
  text-align: left !important;
`;
