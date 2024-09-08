import React,
{
  useEffect,
  useState,
} from 'react';

import {
  AccordionItemStyled,
  AccordionItemRenderView,
  DefaultHeaderStyled,
  DefaultHeaderTitle,
  AccordionSubItemTitle,
  DefaultContentTitle,
} from './styled';



export interface IProps {
  index?: any;
  item: any;
  title?: string;
  content?: any;

  expanded?: boolean; // O estado inicialmente do acordeon
  iconExpanded?: React.ReactNode; // Ícone a ser exibido quando o item está expandido
  iconNormal?: React.ReactNode; // Ícone a ser exibido quando o item está fechado

  renderHeader?: (item: any, isExpanded: boolean, onClick: () => void) => React.ReactNode; // Função para renderizar o cabeçalho
  renderContent?: (item: any) => React.ReactNode; // Função para renderizar o conteúdo

  headerStyle?: React.CSSProperties; // Estilo do cabeçalho
  contentStyle?: React.CSSProperties; // Estilo do conteúdo

  onAccordionOpen?: (item: any, index: number) => void; // Callback chamado quando um item é aberto
  onAccordionClose?: (item: any, index: number) => void; // Callback chamado quando um item é fechado

  noPress?: boolean; // Se verdadeiro, desativa o gerenciamento de cliques para abrir/fechar
  onPress?: (index: number) => void; // Callback chamado quando um item é pressionado
  style?: React.CSSProperties; // Estilo do componente Accordion
}



const Accordion: React.FunctionComponent<IProps> = (props: IProps) => {
  const indexReceived = props.index || 0;

  const [isOpen, setIsOpen] = useState<boolean>(props.expanded ? props.expanded : false);



  const handleClick = () => {
    if (props.noPress) return;

    const newExpandedState = !isOpen;
    setIsOpen(newExpandedState);

    if (props.onPress) {
      props.onPress(indexReceived);
    }

    if (newExpandedState && props.onAccordionOpen) {
      props.onAccordionOpen && props.onAccordionOpen(props.item, indexReceived);
    }

    if (!newExpandedState && props.onAccordionClose) {
      props.onAccordionClose && props.onAccordionClose(props.item, indexReceived);
    }
  };


  useEffect(() => {
    setIsOpen(props.expanded || false);
  }, [props.expanded]);



  return (

    <AccordionItemStyled
      style={props.style}>

      {props.renderHeader
        ? props.renderHeader(
          props.item,
          isOpen,
          handleClick,
        )
        : (
          <AccordionItemRenderView
            onClick={handleClick}>

            <DefaultHeaderStyled
              style={props.headerStyle}>

              <DefaultHeaderTitle>
                {props?.title || 'Accordion'}
              </DefaultHeaderTitle>

              {isOpen
                ? props.iconExpanded
                : props.iconNormal
              }

            </DefaultHeaderStyled>

          </AccordionItemRenderView>
        )
      }



      {isOpen && (
        <AccordionSubItemTitle>

          {props.renderContent
            ? props.renderContent(props.item)
            : (
              <DefaultContentTitle
                style={props.contentStyle}>
                {props?.content}
              </DefaultContentTitle>
            )
          }

        </AccordionSubItemTitle>
      )}

    </AccordionItemStyled>

  );
};



export default Accordion;
