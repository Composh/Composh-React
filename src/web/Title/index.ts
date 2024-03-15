import styled from 'styled-components';



export interface IProps {
  color?: string;
  numberOfLines?: number;
  ellipsizeMode?: string;
}



const Title = styled.h1`
  margin-top: 1px;
  color: ${(props: IProps) => props.color || '#ffffff'};
  font-size: 18px;
  line-height: 21px;
  font-weight: bold;

  display: -webkit-box;
  -webkit-line-clamp: ${(props: IProps) => props.numberOfLines || 1};
  -webkit-box-orient: vertical;
  overflow: hidden;

  word-break: break-word;

  /* TODO: ellipsizeMode */
  text-overflow: ellipsis;
`;



export default Title;
