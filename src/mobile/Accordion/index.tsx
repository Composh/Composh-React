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
    style,
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
      data={dataArray}
      // extraData={this.state}
      style={[
        borderColor && {
          borderColor: borderColor || '#808080',
          borderWidth: 1,
          flexGrow: 0,
        },
        style,
      ]}
      keyExtractor={(_item, index) => String(index)}
      renderItem={({ item, index }) => (
        <AccordionItem
          key={String(index)}
          contentStyle={contentStyle}
          expanded={selected === index}
          expandedIcon={expandedIcon}
          headerStyle={headerStyle}
          index={index}
          item={item}
          renderContent={renderContent}
          renderHeader={renderHeader}
          onAccordionOpen={onAccordionOpen}
          onAccordionClose={onAccordionClose}
          setSelected={(index: any) => setSelected(index)}
        />
      )}
    // {...this.props}
    />

  );
};



export default Accordion;
