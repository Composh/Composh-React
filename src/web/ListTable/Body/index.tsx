import React from 'react';

import {
  Linha,
  CelulaDiv,
} from './styled';



export interface IProps {
  data: any;
  columns: any;
  textEmpty?: any;
}



const TableBody: React.FC<IProps> = (props: IProps) => {
  const dadosOrdenados = props.data;

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
    return coluna?.formatter
      ? coluna.formatter(item[coluna?.dataField], item)
      : item[coluna?.dataField];
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
          <p>
            {props.textEmpty || 'No data'}
          </p>
        </CelulaDiv>
      </Linha>

    );
  }


  return (

    <>
      {dadosOrdenados?.map((item, index) => (
        <Linha key={index}>
          {props.columns?.map((coluna: any) => (
            <CelulaDiv key={coluna?.dataField}>
              {renderResult(item, coluna)}
            </CelulaDiv>
          ))}
        </Linha>
      ))}
    </>

  );
};



export default TableBody;
