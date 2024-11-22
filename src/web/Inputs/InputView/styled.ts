import styled,
{
  css,
} from 'styled-components';

const marginComponent = `${5}px`;



export interface IProps {
  noShadow?: boolean;
  wrapView?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  opacity?: number;
}



// Input Component Container Style

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: ${marginComponent};
  margin-bottom: ${marginComponent};
  z-index: 0;
`;



// Input View Style

export const MultilineStyle = css`
  padding-top: 4px;
  padding-bottom: 4px;
`;

export const BackgroundStyle = css<IProps>`
  background-color: ${(props: IProps) => props.backgroundColor || '#ffffff'};
`;

export const BorderStyle = css<IProps>`
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

export const InputViewStyle = styled.div<IProps>`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  border-radius: 5px;
  opacity: ${(props: IProps) => props.opacity};

  ${(props: IProps) => props.wrapView && WrapStyle};
  ${(props: IProps) => props.backgroundColor && BackgroundStyle};
  ${(props: IProps) => props.borderColor ? BorderStyle : BorderNone};
  ${(props: IProps) => !props.noShadow && ShadowStyle};
`;
