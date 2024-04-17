import React from 'react';

import {
  Containerpaginationreacttable,
  PaginatorPageItem,
  PaginatorPageItemText,
} from './styled';



export interface IProps {
  color?: string;
  accentColor?: string;
  maxPagesToShow?: number;
  pageCurrent?: number | string;
  pagesTotal?: number | string;
  pageSelected?: (page: string) => void;
}



const ListTablePaginator: React.FC<IProps> = (props: IProps) => {
  const colorPaginator = props.color;
  const colorAccentPaginator = props.accentColor;

  const pageCurrent = parseInt(String(props.pageCurrent), 10); // Convertendo para número inteiro
  const pagesTotal = parseInt(String(props.pagesTotal), 10); // Convertendo para número inteiro



  const generatePageList = () => {
    const maxPagesToShow = props.maxPagesToShow || 10;
    const pageList: Array<number> = [];

    const middlePage = Math.floor(maxPagesToShow / 2);
    let startPage = Math.max(1, pageCurrent - middlePage);
    const endPage = Math.min(startPage + maxPagesToShow - 1, pagesTotal);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageList.push(i);
    }

    return pageList;
  };


  const handlePageClick = (page: number | string) => {
    let pageNumber: number;

    if (page === '<<') {
      pageNumber = 1; // Voltar para a primeira página
    }
    else if (page === '>>') {
      pageNumber = pagesTotal; // Avançar para a última página
    }
    else if (page === '<') {
      if (pageCurrent === 1) {
        return; // Se estiver na página 1, não pode voltar mais
      }
      pageNumber = pageCurrent - 1; // Voltar uma página
    }
    else if (page === '>') {
      if (pageCurrent === pagesTotal) {
        return; // Se estiver na última página, não pode avançar mais
      }
      pageNumber = pageCurrent + 1; // Avançar uma página
    }
    else {
      pageNumber = typeof page === 'string' ? parseInt(page, 10) : page;
    }

    if (pageNumber === pageCurrent || isNaN(pageNumber)) {
      return; // Não faz nada se a página clicada for a página atual ou se não for um número
    }

    if (pageNumber === 0 || pageNumber > pagesTotal) {
      return; // Não faz nada se a página clicada for menor que 1 ou maior que o total de páginas
    }

    props.pageSelected && props.pageSelected(String(pageNumber)); // Seleciona a página clicada
  };


  function renderItemPage(active: boolean, page: number | string) {
    const sizeString = String(page);


    return (

      <PaginatorPageItem
        key={sizeString}
        active={active}
        color={colorPaginator}
        accentColor={colorAccentPaginator}
        title={sizeString}
        onClick={() => {
          handlePageClick(sizeString);
        }}>

        <PaginatorPageItemText
          active={active}
          color={colorPaginator}
          accentColor={colorAccentPaginator}>
          {sizeString}
        </PaginatorPageItemText>

      </PaginatorPageItem>

    );
  }



  return (

    <Containerpaginationreacttable>

      {pageCurrent > 1 && renderItemPage(false, '<<')}
      {pageCurrent > 1 && renderItemPage(false, '<')}

      {generatePageList().map((page) => renderItemPage(page === pageCurrent, page))}

      {pageCurrent < pagesTotal && renderItemPage(false, '>')}
      {pageCurrent < pagesTotal && renderItemPage(false, '>>')}

    </Containerpaginationreacttable>

  );
};



export default ListTablePaginator;
