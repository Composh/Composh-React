import React from 'react';



export interface IProps {
  disabled?: boolean;
  lined?: boolean;
  width?: any;
  height?: any;
  color?: any;
  text?: any;
  textColor?: any;
  textSize?: any;
  onPress?: any;
}



const ButtonDefault: React.FC<IProps> = (props: IProps) => {
  const className: any = { ...props };


  const opacityValue = props.disabled ? 0.5 : 1;

  const buttonStyle = {
    width: props.width
      ? typeof props.width === 'string' ? props.width : props.width + 'px'
      : '60px',

    height: props.height ? props.height + 'px' : '40px',
    backgroundColor: props.lined ? 'transparent' : props.color || 'gray',
    border: props.lined ? '2px solid ' + (props.color || 'gray') : 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    color: props.lined ? props.color : props.textColor || 'white',
    fontSize: props.textSize || '14px',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: opacityValue,
  };



  return (

    <a
      className={className?.className}
      style={buttonStyle}
      onClick={() => {
        if (!props.disabled && props.onPress) {
          props.onPress();
        }
      }}>

      <p
        style={{
          fontSize: '14px',
          lineHeight: '17px',
          textAlign: 'center',
        }}>{props.text}
      </p>

    </a>

  );
};



export default ButtonDefault;
