import styled,
{
  css,
} from 'styled-components';



export interface IProps {
  direction?: string;
  disabled?: boolean;
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
  /* opacity: ${(props: IProps) => props.disabled ? 0.4 : 1}; */
`;


export const ButtonRadioTouchable = styled.a`
  display: flex;
  flex-direction: ${(props: IProps) => props.direction};
  align-items: ${(props: IProps) => props.direction === 'row' ? 'flex-start' : 'center'};
  margin-top: 4px;
  margin-bottom: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
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

export const CenterProductBox = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const TextRadio = styled.p`
  ${(props: IProps) => props.color && `color: ${props.color}`};
  font-size: 15px;
`;
