import styled from 'styled-components/native';



export interface IProps {
  backgroundColor?: string;
}



export const ShadowToolbar = styled.View`
  elevation: 12;

  shadow-offset: 0 0;
  shadow-color: black;
  shadow-opacity: 0.6;
  shadow-radius: 8px;
`;

export const HeaderContainer = styled(ShadowToolbar)`
  background-color: ${(props: IProps) => props.backgroundColor};
`;

export const HeaderTransparent = styled.View`
  background-color: transparent;
`;
