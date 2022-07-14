import React from 'react';

import AccordionSubItem from './AccordionSubItem';
import DefaultContent from './DefaultContent';
import DefaultHeader from './DefaultHeader';

import {
  AccordionItemStyled,
  AccordionItemTouchable,
  AccordionItemRenderView,
} from './styled';



export interface IProps {
  contentStyle?: any;
  expanded?: any;
  expandedIcon?: any;
  headerStyle?: any;
  index?: any;
  item?: any;
  onAccordionClose?: any;
  onAccordionOpen?: any;
  renderContent?: any;
  renderHeader?: any;
  setSelected?: any;
};



const AccordionItem: React.FC<IProps> = (props) => {
  return (

    <AccordionItemStyled>

      <AccordionItemTouchable
        onPress={() => {
          props.onAccordionOpen && !props.expanded && props.onAccordionOpen(props.item, props.index);
          props.onAccordionClose && props.expanded && props.onAccordionClose(props.item, props.index);
          props.setSelected(props.index);
        }}>

        <AccordionItemRenderView>
          {props.renderHeader ? (
            props.renderHeader(props.item, props.expanded)
          ) : (
            <DefaultHeader
              expanded={props.expanded}
              expandedIcon={props.expandedIcon}
              headerStyle={props.headerStyle}
              title={props.item.title}
            />
          )}
        </AccordionItemRenderView>

      </AccordionItemTouchable>

      {props.expanded ? (
        <AccordionSubItem>
          {props.renderContent ? (
            props.renderContent(props.item)
          ) : (
            <DefaultContent
              content={props.item.content}
              contentStyle={props.contentStyle}
            />
          )}
        </AccordionSubItem>
      ) : null}

    </AccordionItemStyled>

  );
};



export default AccordionItem;
