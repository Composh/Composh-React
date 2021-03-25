import styled from 'styled-components/native';

// TODO: VERIFICAR SHADOW - ANDROID E IOS [FICA SUMINDO E APARECENDO NO ANDROID]
export const ShadowToolbar = styled.View`
  elevation: 12;
  
  shadow-offset: 0 0;
  shadow-color: black;
  shadow-opacity: 0.75;
  shadow-radius: 5px;
`;

export const HeaderContainer = styled(ShadowToolbar)`
  background-color: black;
`;

export const HeaderTransparent = styled.View`
  background-color: transparent;
`;