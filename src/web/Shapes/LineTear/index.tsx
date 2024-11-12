import React, {
  useEffect,
  useState,
} from 'react';

import {
  ShapeInfo,
  ShapeTearComponent1,
  ShapeItemTear,
  ShapeTearComponent2,
} from './styled';

const DEFAULT_TEAR_SIZE = 10;
const MAGICAL_OFFSET_CONSTANT = 2;



export interface IProps {
  // sizes of each individual diagonal tear
  tearSize?: number,
  // should match the foreground of attached container
  color?: string,
  // should match the background for the TearLines
  cuttingEdgesColor?: string,
  // generally not used, as width should be calculated
  // on the fly with onLayout
  width?: number,

  style?: any,
  cuttingEdgesSize?: any,
};



const LineTearComp: React.FC<IProps> = (props: IProps) => {
  const className: any = { ...props };



  const [width, setWidth] = useState<number>(24);

  // // used to offset the tear lines halfway under
  // // the "attached container"
  // const margin = (-(props.tearSize || DEFAULT_TEAR_SIZE) * 1.5) / 2;



  function _rawTiles() {
    const tempWidth = props.width ? props.width : width;
    // eslint-disable-next-line no-unused-expressions
    tempWidth / (props.tearSize || DEFAULT_TEAR_SIZE);
    return tempWidth / (props.tearSize || DEFAULT_TEAR_SIZE);
  }

  function tiles() {
    return Math.ceil(_rawTiles());
  }

  function offset() {
    return (
      ((tiles() - _rawTiles()) *
        (props.tearSize || DEFAULT_TEAR_SIZE)) /
      MAGICAL_OFFSET_CONSTANT
    );
  }



  useEffect(() => {
    if (props.width && width !== props.width) {
      setWidth(props.width);
    };
  }, [props.width]);



  return (

    <ShapeInfo
      className={className?.className}
      style={props.style}>

      <ShapeTearComponent1
        width={props.tearSize ? props.cuttingEdgesSize : null}
        height={props.tearSize ? props.tearSize * 1.5 : null}
        marginRight={-offset()}
        backgroundColor={props.cuttingEdgesColor ? props.cuttingEdgesColor : null}
      />


      {new Array(tiles()).fill(0).map((_item, index) => (
        <ShapeItemTear
          key={`tear-${index}`}
          width={props.tearSize ? props.tearSize : null}
          height={props.tearSize ? props.tearSize : null}
          backgroundColor={props.color ? props.color : null}
        />
      ))}


      <ShapeTearComponent2
        width={props.tearSize ? props.cuttingEdgesSize : null}
        height={props.tearSize ? props.tearSize * 1.5 : null}
        backgroundColor={props.cuttingEdgesColor ? props.cuttingEdgesColor : null}
        marginLeft={-offset()}
      />

    </ShapeInfo>

  );
};



export default LineTearComp;
