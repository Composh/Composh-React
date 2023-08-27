import styled from 'styled-components';

import {
  Snackbar,
} from '@material-ui/core';



export interface IProps {
  backgroundColor?: string;
}



export const SnackbarMui = styled(Snackbar)`
  z-index: 9999;

  .MuiSnackbarContent-root{
    background-color: ${(props: IProps) => props.backgroundColor};
  }
`;
