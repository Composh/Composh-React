import React from 'react';



export interface IProps {
  type?: string;
  name?: string;
  size?: number;
  color?: string;
  reverse?: boolean;
  reverseColor?: string;
  // disabled?: boolean;
  solid?: boolean;
  brand?: boolean;
  style?: any;
}


// Icon.defaultProps = {
//   underlayColor: 'transparent',
//   reverse: false,
//   raised: false,
//   size: 24,
//   color: 'black',
//   reverseColor: 'white',
//   disabled: false,
//   type: 'material',
//   solid: false,
//   brand: false,
//   backgroundColor: '#D1D5D8',
// };



const Icon: React.FC<IProps> = (props) => {
  return (
    <p style={{ color: props.color || 'red' }}>
      []
    </p>
  );
};



export default Icon;
