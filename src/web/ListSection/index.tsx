import React from 'react';

import {
  SectionContainer,
  SectionListContainer,
  SectionHeader,
  SectionItemContent,
} from './styled';



interface IProps {
  keyExtractor?: any;
  sections?: any;
  renderSectionHeader?: any;
  renderItem?: any;
  style?: any;
}



const ListSection: React.FC<IProps> = (props) => {
  const className: any = { ...props };



  return (

    <SectionContainer
      className={className?.className}
      style={props.style}>

      {props?.sections.map((section: any, index: number) => {
        props.keyExtractor(section, index);

        return (

          <SectionListContainer key={index}>

            <SectionHeader>
              {props?.renderSectionHeader(section)}
            </SectionHeader>


            <SectionItemContent>
              {section?.data?.map((item: any, index: number) => (
                props?.renderItem(item, index)
              ))}
            </SectionItemContent>


            {section.description && section.description}

          </SectionListContainer>

        );
      })}

    </SectionContainer>

  );
};



export default ListSection;
