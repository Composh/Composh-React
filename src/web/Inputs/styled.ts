import styled,
{
  css,
} from 'styled-components';



export interface IProps {
  wrap?: boolean;
  inputTextCenter?: boolean;
  multiline?: boolean;
  backgroundColor?: string;
  color?: string;
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
  margin-top: 1px;
  margin-bottom: 5px;
  margin-left: 6px;
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
  border-color: ${(props: IProps) => props.borderColor};
  border-width: ${(props: IProps) => props.borderWidth || 0}px;
`;

export const WrapStyle = css`
  flex-wrap: wrap;
`;

export const ShadowStyle = css`
  elevation: 2;

  shadow-offset: 2px 2px;
  shadow-color: gray;
  shadow-radius: 2px;
  shadow-opacity: 0.3;
`;

export const InputViewStyle = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  margin-top: 4px;
  margin-bottom: 3px;
  border-radius: 5px;
  opacity: ${(props: IProps) => props.opacity};

  ${(props: IProps) => props.wrap && WrapStyle};
  ${(props: IProps) => props.multiline && MultilineStyle};
  ${(props: IProps) => props.backgroundColor && BackgroundStyle};
  ${(props: IProps) => props.borderColor && BorderStyle};
  ${(props: IProps) => !props.noShadow && ShadowStyle};
`;



// TextInput Component Style

export const TextAlignStyle = css`
  text-align: center;
`;

export const TextInputStyle = styled.input`
  flex: 1;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  background-color: transparent;
  font-size: 14px;
  border: none;

  text-decoration-color: transparent;
  text-shadow-color: transparent;

  ${(props: IProps) => props.inputTextCenter && TextAlignStyle};
`;



// Help Contents

export const HelpContainerViewStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 4px;
  margin-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
`;

export const HelpTextComponentStyle = styled.p`
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