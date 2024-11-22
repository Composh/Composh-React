import styled,
{
  css,
} from 'styled-components';



export interface IProps {
  paddingLeft?: boolean;
  paddingRight?: boolean;
  wrapView?: boolean;
  inputTextCenter?: boolean;
  multiline?: boolean;
  backgroundColor?: string;
  color?: string;
  placeholderTextColor?: string;
  borderColor?: string;
  borderWidth?: number;
  opacity?: number;
  noShadow?: boolean;
}



export const IconContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 6px;
  margin-right: 6px;
  min-height: 30px;
  min-width: 30px;
`;



export const TextAlignStyle = css`
  text-align: center;
`;

export const PaddingLeftStyle = css`
  padding-left: 10px;
`;

export const PaddingRightStyle = css`
  padding-right: 10px;
`;

export const AllPaddingLeftStyle = css`
  ${PaddingLeftStyle};
  ${PaddingRightStyle};
`;

export const TextInputStyle = styled.input<IProps>`
  display: flex;
  flex: 1;
  width: 100%;
  background-color: transparent;
  font-size: 14px;
  border: none;

  text-decoration-color: transparent;

  outline: none;

  ${(props: IProps) => !props.paddingLeft && !props.paddingRight && AllPaddingLeftStyle};
  ${(props: IProps) => props.paddingLeft && PaddingLeftStyle};
  ${(props: IProps) => props.paddingRight && PaddingRightStyle};

  ${(props: IProps) => props.inputTextCenter && TextAlignStyle};

  ::placeholder {
    color: ${(props: IProps) => props.placeholderTextColor || '#808080'};
  }
`;



// Show Password Component Style

export const ShowPasswordStyle = styled.a`
  display: flex;
  flex-direction: column;
  height: 35px;
  width: 35px;
  margin-left: 6px;
  margin-right: 6px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const IconEye = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
