import styled from 'styled-components/native';



export const Wrapper = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Mask = styled.TouchableOpacity`
  flex: 1;
`;

export const Container = styled.View`
  overflow: hidden;
  background-color: #ffffff;
  height: 0px;
`;

export const DraggableContainer = styled.View`
  width: 100%;
  align-items: center;
  background-color: transparent;
`;

export const DraggableIcon = styled.View`
  width: 35px;
  height: 5px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: #cccccc;
  border-radius: 5px;
`;
