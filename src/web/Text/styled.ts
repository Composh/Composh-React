import styled,
{
  css,
} from 'styled-components';


const paragraphFontSize = 16; // Obtenha o tamanho de fonte do Paragraph
const baseFontSize = paragraphFontSize; // Calcule o novo baseFontSize

const textColor = '#000000';



export interface IProps {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  lineNumbers?: number; // numberOfLines
  ellipsiMode?: 'tail' | 'truncate'; // ellipsizeMode
  color?: string;
  fontSize?: number;
  className?: string; // Adicionando className
}



// Estilo para numberOfLines
export const NumberOfLinesStyle = css`
  display: -webkit-box;
  -webkit-line-clamp: ${(props: IProps) => props.lineNumbers};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

// Estilo para ellipsizeMode 'tail'
export const EllipsizeTailStyle = css`
  text-overflow: ellipsis;
`;

// Estilo para ellipsizeMode 'truncate'
export const EllipsizeTruncateStyle = css`
  overflow: hidden;
  white-space: nowrap;
`;



export const H1Style = css`
  margin-top: 1px;
  font-size: ${(props: IProps) => props.fontSize || (baseFontSize * 2)}px;
  color: ${(props: IProps) => props.color || textColor};
  font-weight: bold;
`;


export const H2Style = css`
  font-size: ${(props: IProps) => props.fontSize || (baseFontSize * 1.5)}px;
  color: ${(props: IProps) => props.color || textColor};
  font-weight: bold;
`;


export const H3Style = css`
  font-size: ${(props: IProps) => props.fontSize || (baseFontSize * 1.2)}px;
  color: ${(props: IProps) => props.color || textColor};
  font-weight: bold;
`;


export const H4Style = css`
  font-size: ${(props: IProps) => props.fontSize || (baseFontSize)}px;
  color: ${(props: IProps) => props.color || textColor};
  font-weight: bold;
`;


export const H5Style = css`
  font-size: ${(props: IProps) => props.fontSize || (baseFontSize * 0.9)}px;
  color: ${(props: IProps) => props.color || textColor};
  font-weight: bold;
`;


export const H6Style = css`
  font-size: ${(props: IProps) => props.fontSize || (baseFontSize * 0.8)}px;
  color: ${(props: IProps) => props.color || textColor};
  font-weight: bold;
`;


export const PStyle = css`
  font-size: ${(props: IProps) => props.fontSize || (baseFontSize)}px;
  line-height: 1.5;
  color: ${(props: IProps) => props.color || textColor};
`;



export const TextStyled = styled.p`
  ${(props: IProps) => {
    switch (props.type) {
      case 'h1':
        return H1Style;
      case 'h2':
        return H2Style;
      case 'h3':
        return H3Style;
      case 'h4':
        return H4Style;
      case 'h5':
        return H5Style;
      case 'h6':
        return H6Style;
      default:
        return PStyle;
    }
  }}
  
  ${(props) => {
    switch (props.ellipsiMode) {
      case 'truncate':
        return EllipsizeTruncateStyle;

      case 'tail':
        return EllipsizeTailStyle;

      default:
        return null;
    }
  }}

  ${(props) => props.lineNumbers && `
  display: -webkit-box;
  -webkit-line-clamp: ${(props: IProps) => props.lineNumbers};
  -webkit-box-orient: vertical;
  overflow: hidden;
`};

  ${(props) => props.className && css`${props.className}`}; // Aplica o className se presente
`;
