import styled,
{
  css,
} from 'styled-components';



export interface IProps {
  width?: number | string;
}



export const Linha = styled.div`
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
  border-top-color: ${'#ddd'};
  border-top-style: solid;
  border-top-width: 0.5px;
  border-bottom-color: ${'#ddd'};
  border-bottom-style: solid;
  border-bottom-width: 0.5px;
`;



export const MaxWidthStyle = css<IProps>`
  width: ${(props: IProps) => typeof props.width === 'number' ? `${props.width}px` : props.width || 'auto'};
  min-width: ${(props: IProps) => typeof props.width === 'number' ? `${props.width}px` : props.width || 'auto'};
  max-width: ${(props: IProps) => typeof props.width === 'number' ? `${props.width}px` : props.width || 'auto'};
`;

export const CelulaDiv = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  ${(props: IProps) => props.width && MaxWidthStyle}
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
