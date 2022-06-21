import styled from 'styled-components';



interface IProps {
  group?: string;
}



const ToolbarGroup = styled.div`
  margin: ${(props: IProps) => (props.group ? 0 : 0)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;



export default ToolbarGroup;
