import styled,
{
  css,
} from 'styled-components';



interface IProps {
  relative?: boolean;
  backgroundColor?: string;
}



const AbsoluteStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const RelativeStyle = css`
  position: relative;
`;

// overflow: hidden;
const Screen = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props: IProps) => props.backgroundColor || 'gray'};
  ${(props: IProps) => !props.relative ? AbsoluteStyle : RelativeStyle};
`;



export default Screen;
