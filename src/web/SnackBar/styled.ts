import styled from 'styled-components';

import {
  Snackbar,
} from '@material-ui/core';



export interface IProps {
  backgroundColor?: string;
}



// O snackbar precisa ficar na frente de tudo (overlays de modal usam 99999 !important
// e a barra do ViewScroll 999999), entao usa o maior z-index aceito pelos navegadores.
const SNACKBAR_Z_INDEX = 2147483647;



export const SnackbarMui = styled(Snackbar)`
  z-index: ${SNACKBAR_Z_INDEX} !important;

  .MuiSnackbarContent-root{
    background-color: ${(props: IProps) => props.backgroundColor};
  }
`;
