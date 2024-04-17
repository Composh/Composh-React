import styled from 'styled-components/native';



export interface IProps {
  backgroundColor?: string;
}



export const ScrollHorizontalContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: ${(props: IProps) => props.backgroundColor || 'transparent'};
`;
