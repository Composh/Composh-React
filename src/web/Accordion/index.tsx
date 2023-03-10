import React,
{
  useState,
} from 'react';

import AccordionItem from './AccordionItem';

import {
  AccordionStyled,
} from './styled';



export interface IProps {
  borderColor?: any;
  contentStyle?: any;
  dataArray?: any;
  expanded?: any;
  expandedIcon?: any;
  headerStyle?: any;
  onAccordionClose?: any;
  onAccordionOpen?: any;
  renderContent?: any;
  renderHeader?: any;
  noPress?: boolean;
  style?: any;
};



const Accordion: React.FC<IProps> = (props) => {
  const {
    borderColor,
    contentStyle,
    dataArray,
    expanded,
    expandedIcon,
    headerStyle,
    onAccordionClose,
    onAccordionOpen,
    renderContent,
    renderHeader,
    noPress,
  } = props;

  const [selected, setSelectedState] = useState(expanded);

  function setSelected(index: any) {
    if (selected === index) {
      setSelectedState(undefined);
    }
    else {
      setSelectedState(index);
    }
  }



  return (

    <AccordionStyled
      // data={ }
      // extraData={this.state}
      // style={[
      //   borderColor && {
      //     borderColor: borderColor || '#808080',
      //     borderWidth: 1,
      //     flexGrow: 0,
      //   },
      //   style,
      // ]}
      // keyExtractor={(_item, index) => String(index)}
      // renderItem={({ item, index }) => (

      // )}
      // {...this.props}
      style={props.style}
    >
      {dataArray.map((item: any, index: number) => (
        <AccordionItem
          key={String(index)}
          contentStyle={contentStyle}
          expanded={selected === index}
          expandedIcon={expandedIcon}
          headerStyle={headerStyle}
          index={index}
          item={item}
          renderContent={(item: any) => renderContent(item)}
          renderHeader={(item: any, expanded: boolean) => renderHeader(item, expanded)}
          onAccordionOpen={onAccordionOpen}
          onAccordionClose={onAccordionClose}
          setSelected={(index: any) => !noPress && setSelected(index)}
        />
      ))}
    </AccordionStyled>

  );
};



export default Accordion;
