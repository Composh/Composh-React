import styled from 'styled-components/native';
import TextInputMask from 'react-native-text-input-mask';


// Input Component Container Style

export const InputsContainer = styled.View`
  align-content: center;
  margin-top: 4px;
  margin-bottom: 4px;
  z-index: 0;
`;



// Icon Styles

export const IconContent = styled.View`
  align-items: center;
  justify-content: center;
  min-height: 30px;
  min-width: 30px;
`;



// Label

export const LabelStyle = styled.Text`
  margin-top: 1px;
  margin-bottom: 5px;
  margin-left: 6px;
  font-weight: 500;
  font-size: 14px;
`;



// Input View Style

export const InputViewStyle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  margin-top: 4px;
  margin-bottom: 3px;
  border-radius: 5px;
`;



// TextInput Component Style


export const TextInputMaskStyle = styled(TextInputMask)`
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
  background-color: transparent;
  font-size: 14px;
  border-width: 0;

  text-decoration-color: transparent;
  text-shadow-color: transparent;
`;


export const TextInputStyle = styled.TextInput`
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
  background-color: transparent;
  font-size: 14px;
  border-width: 0;

  text-decoration-color: transparent;
  text-shadow-color: transparent;
`;



// Help Contents

export const HelpContainerViewStyle = styled.View`
  flex-direction: row;
  margin-top: 4px;
  margin-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
`;

export const HelpTextComponentStyle = styled.Text`
  flex: 1;
  font-size: 12px;
  font-style: italic;
`;

export const HelpCountTextStyle = styled.Text`
  margin-left: 5px;
  font-size: 12px;
`;



// Show Password Component Style
export const ShowPasswordStyle = styled.TouchableOpacity`
  height: 35px;
  width: 35px;
  margin-left: 6px;
  margin-right: 6px;
  align-items: center;
  justify-content: center;
`;
