import styled from 'styled-components';



export interface IProps {
  colors?: Array<string>;
  locations?: Array<number>;
  angle?: any;

  // start?: any;
  // end?: any;
  // useAngle?: any;
  // angleCenter?: any;
}



function returnBackground(props: IProps) {
  const angleLinear = props.angle || 90;

  let colorArray: string[] = [];

  if (
    props.colors &&
    props.colors.length > 0 &&
    props.locations &&
    props.locations.length === props.colors.length
  ) {
    colorArray = props.colors.map((itemColor: string, index) => {
      const location = props.locations ? props.locations[index] * 100 : 0; // Convert location to percentage
      return `${itemColor} ${location}%`;
    });
  }
  else if (props.colors && props.colors.length > 1) {
    colorArray = props.colors.map((itemColor: string, index) => {
      return `${itemColor} ${index * 100}%`;
    });
  }
  else if (props.colors && props.colors.length === 1) {
    colorArray = [
      `${props.colors[0]} 0%`,
      `${props.colors[0]} 100%`,
    ];
  }
  else {
    colorArray = [
      'red 0%',
      'green 100%',
    ];
  }


  return `linear-gradient(
    ${angleLinear}deg,
    ${colorArray.join(', ')}
  )`;
}


const LinearGradient = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  background: ${(props: IProps) => props.colors?.[0]};
  background: ${(props: IProps) => returnBackground(props)};
`;



export default LinearGradient;
