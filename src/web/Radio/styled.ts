import styled,
{
  css,
} from 'styled-components';



export interface IProps {
  direction?: string;
  width?: number;
  height?: number;
  color?: string;
  borderColor?: string;
}



export const DirectionStyle = css`
  flex-direction: ${(props: IProps) => props.direction};
  flex: 1;
`;

export const ButtonRadioContainer = styled.div`
  display: flex;
  ${(props: IProps) => props.direction && DirectionStyle};
  margin-top: 5px;
  margin-bottom: 5px;
`;


export const ButtonRadioTouchable = styled.a`
  display: flex;
  flex-direction: ${(props: IProps) => props.direction};
  flex: 1;
  align-items: center;
  border-color: ${(props: IProps) => props.borderColor};
  cursor: pointer;
`;

export const LeftProductBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;


export const IconCircleView = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10000px;
  align-items: center;
  justify-content: center;
  width: ${(props: IProps) => props.width}px;
  height: ${(props: IProps) => props.height}px;
  border-color: ${(props: IProps) => props.borderColor};
  border-style: solid;
  border-width: 1px;
`;


// export const ProductBox = styled.div`
//   flex-direction: row;
//   border-radius: 7px;
//   border-width: 1px;
//   padding-top: 15px;
//   padding-left: 10px;
//   padding-right: 10px;
//   padding-bottom: 15px;
//   margin-top: 10px;
// `;

// export const ProductBoxLess = styled.div`
//   flex-direction: row;
//   margin-top: 10px;
// `;

// export const CircleRadioView = styled.div`
//   border-width: 1px;
//   border-radius: 10000px;
//   align-items: center;
//   justify-content: center;
// `;

// export const IconView = styled.div`
//   border-width: 1px;
//   border-radius: 10000px;
//   align-items: center;
//   justify-content: center;
// `;

export const CircleFill = styled.div`
  display: flex;
  flex-direction: column;
  border-width: 1px;
  border-radius: 1000px;
`;

export const CenterProductBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 6;
  justify-content: center;
  align-items: flex-start;
  padding-left: 4px;
  padding-right: 4px;
`;

export const TextRadio = styled.p`
  ${(props: IProps) => props.color && `color: ${props.color}`};
  font-size: 15px;
`;
