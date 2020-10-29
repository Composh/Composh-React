import styled from 'styled-components/native';

// TODO: VERIFICAR SHADOW - ANDROID E IOS [FICA SUMINDO E APARECENDO NO ANDROID]
export const ShadowToolbar = styled.View`
  elevation: 12;
  
  shadow-opacity: 0.75;
  shadow-radius: 5px;
  shadow-color: black;
  shadow-offset: 0px 0px;
`;

export const HeaderContainer = styled.View`
  background-color: black;
`;

export const HeaderTransparent = styled.View`
  background-color: transparent;
`;

export const ToolbarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 8px;
  padding-right: 8px;
`;

export const CenterContainer = styled.View`
  flex: 1;
  padding-left: 8px;
  padding-right: 8px;
`;
