import React from 'react';
import './styled.css';



export interface IProps {
  className?: any;
  style?: any;
  renderItem?: any;
  renderSectionHeader?: any;
  sections?: any;
  keyExtractor?: any;
}



const ListSection: React.FC<IProps> = (props) => {
  let _className = 'sectionlist-container';
  if (props.className) {
    _className += ' ' + props.className;
  }

  return (
    <div className={_className} style={props.style}>
      {props?.sections.map((section: any, index: any) => {
        return (

          <div className="section-container" key={props.keyExtractor(section, index)}>

            <div className="section-header">
              {props?.renderSectionHeader(section)}
            </div>


            <div className="section-item-container">
              {section.data.map((item: any, index: any) => (
                props?.renderItem(item, index)
              ))}
            </div>


            {section.description && section.description}

          </div>

        );
      })}
    </div>
  );
};



export default ListSection;
