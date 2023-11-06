import styled,
{
  css,
} from 'styled-components';



export interface IProps {
  xs?: any; // Breakpoint Extra Pequeno (xs)
  sm?: any; // Breakpoint Pequeno (sm)
  md?: any; // Breakpoint Médio (md)
  lg?: any; // Breakpoint Grande (lg)
  xl?: any; // Breakpoint Extra Grande (xl)
}



// Breakpoint Extra Pequeno (xs) - Até 575px
export const xsGridStyle = css`
  @media (max-width: 575px) {
    background-color: lightblue;
  }
`;



/*
@media (min-width:600px) {
  background-color: lightcoral;
}
*/
// Breakpoint Pequeno (sm) - Geralmente de 576px a 767px
export const smGridStyle = css`
 @media (min-width: 576px) and (max-width: 767px) {
    flex-grow: 0;
    max-width: none;
    flex-basis: auto;

    /*
    .MuiGrid-grid-sm-true {
      flex-grow: 1;
      max-width: 100%;
      flex-basis: 0;
    }
   */

    ${(props: IProps) => props.sm === 1 && `
      flex-grow: 0;
      max-width: 8.333333%;
      flex-basis: 8.333333%;
    `}

    ${(props: IProps) => props.sm === 2 && `
      flex-grow: 0;
      max-width: 16.666667%;
      flex-basis: 16.666667%;
    `}

    ${(props: IProps) => props.sm === 3 && `
      flex-grow: 0;
      max-width: 25%;
      flex-basis: 25%;
    `}

    ${(props: IProps) => props.sm === 4 && `
      flex-grow: 0;
      max-width: 33.333333%;
      flex-basis: 33.333333%;
    `}

    ${(props: IProps) => props.sm === 5 && `
      flex-grow: 0;
      max-width: 41.666667%;
      flex-basis: 41.666667%;
    `}

    ${(props: IProps) => props.sm === 6 && `
      flex-grow: 0;
      max-width: 50%;
      flex-basis: 50%;
    `}

    ${(props: IProps) => props.sm === 7 && `
      flex-grow: 0;
      max-width: 58.333333%;
      flex-basis: 58.333333%;
    `}

    ${(props: IProps) => props.sm === 8 && `
      flex-grow: 0;
      max-width: 66.666667%;
      flex-basis: 66.666667%;
    `}

    ${(props: IProps) => props.sm === 9 && `
      flex-grow: 0;
      max-width: 75%;
      flex-basis: 75%;
    `}

    ${(props: IProps) => props.sm === 10 && `
      flex-grow: 0;
      max-width: 83.333333%;
      flex-basis: 83.333333%;
    `}

    ${(props: IProps) => props.sm === 11 && `
      flex-grow: 0;
      max-width: 91.666667%;
      flex-basis: 91.666667%;
    `}

    ${(props: IProps) => props.sm === 12 && `
      flex-grow: 0;
      max-width: 100%;
      flex-basis: 100%;
    `}

  }

`;


/*
@media (min-width:960px) {
  background-color: lightgreen;
}
*/
// Breakpoint Médio (md) - Geralmente de 768px a 991px
export const mdGridStyle = css`
 @media (min-width: 768px) and (max-width: 991px) {
      flex-grow: 0;
      max-width: none;
      flex-basis: auto;

    /*
    .MuiGrid-grid-md-true {
      flex-grow: 1;
      max-width: 100%;
      flex-basis: 0;
    }
    */

    ${(props: IProps) => props.md === 1 && `
      flex-grow: 0;
      max-width: 8.333333%;
      flex-basis: 8.333333%;
    `}

    ${(props: IProps) => props.md === 2 && `
      flex-grow: 0;
      max-width: 16.666667%;
      flex-basis: 16.666667%;
    `}

    ${(props: IProps) => props.md === 3 && `
      flex-grow: 0;
      max-width: 25%;
      flex-basis: 25%;
    `}

    ${(props: IProps) => props.md === 4 && `
      flex-grow: 0;
      max-width: 33.333333%;
      flex-basis: 33.333333%;
    `}

    ${(props: IProps) => props.md === 5 && `
      flex-grow: 0;
      max-width: 41.666667%;
      flex-basis: 41.666667%;
    `}

    ${(props: IProps) => props.md === 6 && `
      flex-grow: 0;
      max-width: 50%;
      flex-basis: 50%;
    `}

    ${(props: IProps) => props.md === 7 && `
      flex-grow: 0;
      max-width: 58.333333%;
      flex-basis: 58.333333%;
    `}

    ${(props: IProps) => props.md === 8 && `
      flex-grow: 0;
      max-width: 66.666667%;
      flex-basis: 66.666667%;
    `}

    ${(props: IProps) => props.md === 9 && `
      flex-grow: 0;
      max-width: 75%;
      flex-basis: 75%;
    `}

    ${(props: IProps) => props.md === 10 && `
      flex-grow: 0;
      max-width: 83.333333%;
      flex-basis: 83.333333%;
    `}

    ${(props: IProps) => props.md === 11 && `
      flex-grow: 0;
      max-width: 91.666667%;
      flex-basis: 91.666667%;
    `}

    ${(props: IProps) => props.md === 12 && `
      flex-grow: 0;
      max-width: 100%;
      flex-basis: 100%;
    `}

  }
`;


/*
@media (min-width:1280px) {
  background-color: lightpink;
}
*/
// Breakpoint Grande (lg) - Geralmente de 992px a 1199px
export const lgGridStyle = css`
  @media (min-width: 992px) and (max-width: 1199px) {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-basis: auto;
    max-width: none;
    background-color: lightpink;

    /*
    .MuiGrid-grid-lg-true {
      flex-grow: 1;
      max-width: 100%;
      flex-basis: 0;
    }
    */

    ${(props: IProps) => props.lg === 1 && `
      flex-grow: 0;
      max-width: 8.333333%;
      flex-basis: 8.333333%;
    `}

    ${(props: IProps) => props.lg === 2 && `
      flex-grow: 0;
      max-width: 16.666667%;
      flex-basis: 16.666667%;
    `}

    ${(props: IProps) => props.lg === 3 && `
      flex-grow: 0;
      max-width: 25%;
      flex-basis: 25%;
    `}

    ${(props: IProps) => props.lg === 4 && `
      flex-grow: 0;
      max-width: 33.333333%;
      flex-basis: 33.333333%;
    `}

    ${(props: IProps) => props.lg === 5 && `
      flex-grow: 0;
      max-width: 41.666667%;
      flex-basis: 41.666667%;
    `}

    ${(props: IProps) => props.lg === 6 && `
      flex-grow: 0;
      max-width: 50%;
      flex-basis: 50%;
    `}

    ${(props: IProps) => props.lg === 7 && `
      flex-grow: 0;
      max-width: 58.333333%;
      flex-basis: 58.333333%;
    `}

    ${(props: IProps) => props.lg === 8 && `
      flex-grow: 0;
      max-width: 66.666667%;
      flex-basis: 66.666667%;
    `}

    ${(props: IProps) => props.lg === 9 && `
      flex-grow: 0;
      max-width: 75%;
      flex-basis: 75%;
    `}

    ${(props: IProps) => props.lg === 10 && `
      flex-grow: 0;
      max-width: 83.333333%;
      flex-basis: 83.333333%;
    `}

    ${(props: IProps) => props.lg === 11 && `
      flex-grow: 0;
      max-width: 91.666667%;
      flex-basis: 91.666667%;
    `}

    ${(props: IProps) => props.lg === 12 && `
      flex-grow: 0;
      max-width: 100%;
      flex-basis: 100%;
    `}

  }
`;



/*
@media (min-width:1920px) {
  background-color: lightsalmon;
}
*/
// Breakpoint Extra Grande (xl) - Geralmente de  1200px e acima
export const xlGridStyle = css`
  @media (min-width: 1200px) {
   flex-grow: 0;
   max-width: none;
   flex-basis: auto;

    /*
    .MuiGrid-grid-xl-true {
      flex-grow: 1;
      max-width: 100%;
      flex-basis: 0;
    }
    */

   ${(props: IProps) => props.xl === 1 && `
      flex-grow: 0;
      max-width: 8.333333%;
      flex-basis: 8.333333%;
    `}

   ${(props: IProps) => props.xl === 2 && `
      flex-grow: 0;
      max-width: 16.666667%;
      flex-basis: 16.666667%;
    `}

   ${(props: IProps) => props.xl === 3 && `
      flex-grow: 0;
      max-width: 25%;
      flex-basis: 25%;
    `}

   ${(props: IProps) => props.xl === 4 && `
      flex-grow: 0;
      max-width: 33.333333%;
      flex-basis: 33.333333%;
    `}

   ${(props: IProps) => props.xl === 5 && `
      flex-grow: 0;
      max-width: 41.666667%;
      flex-basis: 41.666667%;
    `}

   ${(props: IProps) => props.xl === 6 && `
      flex-grow: 0;
      max-width: 50%;
      flex-basis: 50%;
    `}

   ${(props: IProps) => props.xl === 7 && `
      flex-grow: 0;
      max-width: 58.333333%;
      flex-basis: 58.333333%;
    `}

   ${(props: IProps) => props.xl === 8 && `
      flex-grow: 0;
      max-width: 66.666667%;
      flex-basis: 66.666667%;
    `}

   ${(props: IProps) => props.xl === 9 && `
      flex-grow: 0;
      max-width: 75%;
      flex-basis: 75%;
    `}

   ${(props: IProps) => props.xl === 10 && `
       flex-grow: 0;
      max-width: 83.333333%;
      flex-basis: 83.333333%;
    `}

   ${(props: IProps) => props.xl === 11 && `
       flex-grow: 0;
      max-width: 91.666667%;
      flex-basis: 91.666667%;
    `}

   ${(props: IProps) => props.xl === 12 && `
       flex-grow: 0;
      max-width: 100%;
      flex-basis: 100%;
    `}

  }
`;



export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0;
  padding: 0;
`;


// Estilos padrão aplicados em todos os tamanhos de tela
export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 7px;

  ${smGridStyle}

  ${mdGridStyle}

  ${lgGridStyle}

  ${xlGridStyle}
`;



export default {
  Container: GridContainer,
  Item: GridItem,
};



/*


.MuiGrid-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.MuiGrid-item {
  margin: 0;
  box-sizing: border-box;
}
.MuiGrid-zeroMinWidth {
  min-width: 0;
}
.MuiGrid-direction-xs-column {
  flex-direction: column;
}
.MuiGrid-direction-xs-column-reverse {
  flex-direction: column-reverse;
}
.MuiGrid-direction-xs-row-reverse {
  flex-direction: row-reverse;
}
.MuiGrid-wrap-xs-nowrap {
  flex-wrap: nowrap;
}
.MuiGrid-wrap-xs-wrap-reverse {
  flex-wrap: wrap-reverse;
}
.MuiGrid-align-items-xs-center {
  align-items: center;
}
.MuiGrid-align-items-xs-flex-start {
  align-items: flex-start;
}
.MuiGrid-align-items-xs-flex-end {
  align-items: flex-end;
}
.MuiGrid-align-items-xs-baseline {
  align-items: baseline;
}
.MuiGrid-align-content-xs-center {
  align-content: center;
}
.MuiGrid-align-content-xs-flex-start {
  align-content: flex-start;
}
.MuiGrid-align-content-xs-flex-end {
  align-content: flex-end;
}
.MuiGrid-align-content-xs-space-between {
  align-content: space-between;
}
.MuiGrid-align-content-xs-space-around {
  align-content: space-around;
}
.MuiGrid-justify-content-xs-center {
  justify-content: center;
}
.MuiGrid-justify-content-xs-flex-end {
  justify-content: flex-end;
}
.MuiGrid-justify-content-xs-space-between {
  justify-content: space-between;
}
.MuiGrid-justify-content-xs-space-around {
  justify-content: space-around;
}
.MuiGrid-justify-content-xs-space-evenly {
  justify-content: space-evenly;
}
.MuiGrid-spacing-xs-1 {
  width: calc(100% + 8px);
  margin: -4px;
}
.MuiGrid-spacing-xs-1 > .MuiGrid-item {
  padding: 4px;
}
.MuiGrid-spacing-xs-2 {
  width: calc(100% + 16px);
  margin: -8px;
}
.MuiGrid-spacing-xs-2 > .MuiGrid-item {
  padding: 8px;
}
.MuiGrid-spacing-xs-3 {
  width: calc(100% + 24px);
  margin: -12px;
}
.MuiGrid-spacing-xs-3 > .MuiGrid-item {
  padding: 12px;
}
.MuiGrid-spacing-xs-4 {
  width: calc(100% + 32px);
  margin: -16px;
}
.MuiGrid-spacing-xs-4 > .MuiGrid-item {
  padding: 16px;
}
.MuiGrid-spacing-xs-5 {
  width: calc(100% + 40px);
  margin: -20px;
}
.MuiGrid-spacing-xs-5 > .MuiGrid-item {
  padding: 20px;
}
.MuiGrid-spacing-xs-6 {
  width: calc(100% + 48px);
  margin: -24px;
}
.MuiGrid-spacing-xs-6 > .MuiGrid-item {
  padding: 24px;
}
.MuiGrid-spacing-xs-7 {
  width: calc(100% + 56px);
  margin: -28px;
}
.MuiGrid-spacing-xs-7 > .MuiGrid-item {
  padding: 28px;
}
.MuiGrid-spacing-xs-8 {
  width: calc(100% + 64px);
  margin: -32px;
}
.MuiGrid-spacing-xs-8 > .MuiGrid-item {
  padding: 32px;
}
.MuiGrid-spacing-xs-9 {
  width: calc(100% + 72px);
  margin: -36px;
}
.MuiGrid-spacing-xs-9 > .MuiGrid-item {
  padding: 36px;
}
.MuiGrid-spacing-xs-10 {
  width: calc(100% + 80px);
  margin: -40px;
}
.MuiGrid-spacing-xs-10 > .MuiGrid-item {
  padding: 40px;
}
.MuiGrid-grid-xs-auto {
  flex-grow: 0;
  max-width: none;
  flex-basis: auto;
}
.MuiGrid-grid-xs-true {
  flex-grow: 1;
  max-width: 100%;
  flex-basis: 0;
}
.MuiGrid-grid-xs-1 {
  flex-grow: 0;
  max-width: 8.333333%;
  flex-basis: 8.333333%;
}
.MuiGrid-grid-xs-2 {
  flex-grow: 0;
  max-width: 16.666667%;
  flex-basis: 16.666667%;
}
.MuiGrid-grid-xs-3 {
  flex-grow: 0;
  max-width: 25%;
  flex-basis: 25%;
}
.MuiGrid-grid-xs-4 {
  flex-grow: 0;
  max-width: 33.333333%;
  flex-basis: 33.333333%;
}
.MuiGrid-grid-xs-5 {
  flex-grow: 0;
  max-width: 41.666667%;
  flex-basis: 41.666667%;
}
.MuiGrid-grid-xs-6 {
  flex-grow: 0;
  max-width: 50%;
  flex-basis: 50%;
}
.MuiGrid-grid-xs-7 {
  flex-grow: 0;
  max-width: 58.333333%;
  flex-basis: 58.333333%;
}
.MuiGrid-grid-xs-8 {
  flex-grow: 0;
  max-width: 66.666667%;
  flex-basis: 66.666667%;
}
.MuiGrid-grid-xs-9 {
  flex-grow: 0;
  max-width: 75%;
  flex-basis: 75%;
}
.MuiGrid-grid-xs-10 {
  flex-grow: 0;
  max-width: 83.333333%;
  flex-basis: 83.333333%;
}
.MuiGrid-grid-xs-11 {
  flex-grow: 0;
  max-width: 91.666667%;
  flex-basis: 91.666667%;
}
.MuiGrid-grid-xs-12 {
  flex-grow: 0;
  max-width: 100%;
  flex-basis: 100%;
}


*/
