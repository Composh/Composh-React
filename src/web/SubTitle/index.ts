import styled from 'styled-components';



export interface IProps {
  // true: subtitulo principal (h2). false: p. Visual igual nos dois.
  main?: boolean;
  color?: string;
  numberOfLines?: number;
  ellipsizeMode?: string;
}



const SubTitle = styled.p
  .withConfig<IProps>({
    // main so escolhe a tag: nao vai para o DOM
    shouldForwardProp: (prop, defaultValidatorFn) => prop !== 'main' && defaultValidatorFn(prop),
  })
  .attrs((props: IProps) => ({
    as: props.main ? 'h2' : 'p',
  }))`
  margin-top: 3px;
  margin-bottom: 0;
  color: ${(props: IProps) => props.color || 'gray'};
  font-size: 13.5px;
  font-weight: 500;

  display: -webkit-box;
  -webkit-line-clamp: ${(props: IProps) => props.numberOfLines || 1};
  -webkit-box-orient: vertical;
  overflow: hidden;

  word-break: break-word;

  /* TODO: ellipsizeMode */
  text-overflow: ellipsis;
`;



export default SubTitle;
