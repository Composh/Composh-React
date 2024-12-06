import styled,
{
  css,
} from 'styled-components';

const sizeSwitch = 20;



export interface IProps {
  disabled?: boolean;
  selected?: boolean;
  size?: number;
  color?: string;
  selectedColor?: string;
  textSize?: number;
}



export const SwitchContainer = styled.a<IProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;

  opacity: ${(props: IProps) => props.disabled ? 0.4 : 1};
`;

export const SwitchTextOn = styled.p<IProps>`
  margin-right: 12px;
  color: ${(props: IProps) => props.color || '#000000'};
  font-size: ${(props: IProps) => props.textSize}px;
  font-weight: normal;
  text-align: center;
`;

export const SwitchContent = styled.a<IProps>`
  display: flex;
  position: relative;
  width: ${(props: IProps) => (props.size || sizeSwitch) * 1.87}px;
  min-width: ${(props: IProps) => (props.size || sizeSwitch) * 1.87}px;
  height: ${(props: IProps) => (props.size || sizeSwitch)}px;
  min-height: ${(props: IProps) => (props.size || sizeSwitch)}px;
  border-color: ${(props: IProps) => props.color};
  border-style: solid;
  border-width: ${(props: IProps) => (props.size || sizeSwitch) * 0.05}px;
  border-radius: ${(props: IProps) => (props.size || sizeSwitch) * 0.5}px;
  cursor: pointer;
`;

export const ToggleOnStyle = css<IProps>`
  left: ${(props: IProps) => (props.size || sizeSwitch) * 0.97}px;
`;

export const ToggleOffStyle = css<IProps>`
  right: ${(props: IProps) => (props.size || sizeSwitch) * 0.97}px;
`;

export const ToggleButton = styled.div<IProps>`
  position: absolute;
  top: ${(props: IProps) => (props.size || sizeSwitch) * 0.1}px;
  bottom: ${(props: IProps) => (props.size || sizeSwitch) * 0.1}px;
  width: ${(props: IProps) => (props.size || sizeSwitch) * 0.7}px;
  height: ${(props: IProps) => (props.size || sizeSwitch) * 0.7}px;
  background-color: ${(props: IProps) => props.color};
  border-radius: ${(props: IProps) => (props.size || sizeSwitch) * 0.5}px;

  ${(props: IProps) => props.selected ? ToggleOnStyle : ToggleOffStyle};
`;
