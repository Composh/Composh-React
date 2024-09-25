import styled from 'styled-components';



// export interface IProps {
//   group?: string;
// }



// margin: ${(props: IProps) => (props.group ? 0 : 0)}px;
const ToolbarGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;



export default ToolbarGroup;
