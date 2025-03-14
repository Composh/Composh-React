import React from 'react';

import {
  Linha,
  CelulaDiv,
  CelulaDataPText,
  CelulaNoDataText,
} from './styled';



export interface IProps {
  data: any;
  color?: string;
  columns: any;
  textEmpty?: any;
}



const TableBody: React.FC<IProps> = (props: IProps) => {
  const dadosOrdenados = props.data;
  const colorReceived = props.color || 'black';

  // const dadosOrdenados = [...data].sort((a, b) => {
  //   const valorA = a[ordenacao.coluna];
  //   const valorB = b[ordenacao.coluna];

  //   if (valorA < valorB) {
  //     return ordenacao.direcao === 'asc' ? -1 : 1;
  //   }

  //   if (valorA > valorB) {
  //     return ordenacao.direcao === 'asc' ? 1 : -1;
  //   }

  //   return 0;
  // });


  function renderResult(item: any, coluna: any) {
    if (coluna?.formatter && typeof coluna?.formatter(item[coluna?.dataField], item) === 'string') {
      return (
        <CelulaDataPText>
          {coluna.formatter(item[coluna?.dataField], item)}
        </CelulaDataPText>
      );
    }

    if (coluna.formatter) {
      return coluna.formatter(item[coluna?.dataField], item);
    }

    return (
      <CelulaDataPText>
        {item[coluna?.dataField]}
      </CelulaDataPText>
    );
  }


  if (!(Array.isArray(dadosOrdenados) && dadosOrdenados.length > 0)) {
    if (typeof props.textEmpty !== 'string') {
      return (

        <Linha>
          <CelulaDiv>
            {props.textEmpty}
          </CelulaDiv>
        </Linha>

      );
    }


    return (

      <Linha>
        <CelulaDiv>

          <CelulaNoDataText>
            {props.textEmpty || 'No data'}
          </CelulaNoDataText>

        </CelulaDiv>
      </Linha>

    );
  }


  return (

    <>

      {dadosOrdenados?.map((item: any, index: number) => (
        <Linha
          key={index}
          backgroundColor={index % 2 === 0 ? 'transparent' : colorReceived}>

          {props.columns?.map((coluna: any, index: number) => (
            <CelulaDiv
              key={index}
              width={coluna?.width}>
              {renderResult(item, coluna)}
            </CelulaDiv>
          ))}

        </Linha>
      ))}

    </>

  );
};



export default TableBody;
