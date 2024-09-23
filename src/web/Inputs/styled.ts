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



// Input Component Container Style

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 4px;
  margin-bottom: 4px;
  z-index: 0;
`;



// Icon Styles

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



// Label

export const LabelStyle = styled.p`
  margin-bottom: 3px;
  padding-left: 3px;
  padding-right: 3px;
  color: ${(props: IProps) => props.color || '#000'};
  font-weight: 500;
  font-size: 14px;
`;



// Input View Style

export const MultilineStyle = css`
  padding-top: 4px;
  padding-bottom: 4px;
`;

export const BackgroundStyle = css`
  background-color: ${(props: IProps) => props.backgroundColor || '#ffffff'};
`;

export const BorderStyle = css`
  border-color: ${(props: IProps) => props.borderColor || 'transparent'};
  border-style: solid;
  border-width: ${(props: IProps) => props.borderWidth || 0}px;
`;

export const BorderNone = css`
  border-color: transparent;
  border-style: solid;
  border-width: 0;
`;

export const WrapStyle = css`
  flex-wrap: wrap;
`;

export const ShadowStyle = css`
  box-shadow: 0 2px 18px 1px rgb(49 53 72 / 10%);
`;

export const InputViewStyle = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  margin-top: 4px;
  margin-bottom: 4px;
  border-radius: 5px;
  opacity: ${(props: IProps) => props.opacity};

  ${(props: IProps) => props.wrapView && WrapStyle};
  ${(props: IProps) => props.multiline && MultilineStyle};
  ${(props: IProps) => props.backgroundColor && BackgroundStyle};
  ${(props: IProps) => props.borderColor ? BorderStyle : BorderNone};
  ${(props: IProps) => !props.noShadow && ShadowStyle};
`;



// TextInput Component Style

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

export const TextInputStyle = styled.input`
  display: flex;
  flex: 1;
  width: 100%;
  background-color: transparent;
  font-size: 14px;
  border: none;

  text-decoration-color: transparent;
  text-shadow-color: transparent;

  outline: none;

  ${(props: IProps) => !props.paddingLeft && !props.paddingRight && AllPaddingLeftStyle};
  ${(props: IProps) => props.paddingLeft && PaddingLeftStyle};
  ${(props: IProps) => props.paddingRight && PaddingRightStyle};

  ${(props: IProps) => props.inputTextCenter && TextAlignStyle};

  ::placeholder {
    color: ${(props: IProps) => props.placeholderTextColor || '#808080'};
  }
`;



// Help Contents

export const HelpContainerViewStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3px;
  padding-left: 5px;
  padding-right: 5px;
`;

export const HelpTextComponentStyle = styled.p`
  display: flex;
  flex: 1;
  font-size: 12px;
  font-style: italic;
`;

export const HelpCountTextStyle = styled.p`
  margin-left: 5px;
  font-size: 12px;
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
