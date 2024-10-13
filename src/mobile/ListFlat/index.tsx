import React from 'react';
import Container from '../Container';

import {
  ComposhFlatListContainer,
  ComposhFlatListStyle,
  ComposhFlatListContent,
} from './styled';



export interface IProps {
  loading?: boolean;
  noScroll?: boolean;

  data: Array<any>;
  keyExtractor?: any;

  refreshControl?: any;

  style?: any;

  contentContainerStyle?: any;
  onEndReachedThreshold?: any;

  renderItem: any;
  listHeaderComponent?: any;
  listLoadingComponent?: any;
  listFooterComponent?: any;
  listEmptyComponent?: any;
}



const ListFlat: React.FC<IProps> = (props: IProps) => {
  const dataTable: Array<any> = props.data && Array.isArray(props.data) && props.data?.length > 0 ? props.data : [];



  function renderFlatList() {
    return (

      <ComposhFlatListContent
        style={props.contentContainerStyle}>
        {dataTable?.length > 0 && dataTable?.map((item: any, index: any) => (
          props.renderItem(item, index)
        ))}
      </ComposhFlatListContent>

    );
  }


  function renderNoScroll() {
    return (

      <ComposhFlatListContainer
        style={props.style}>

        {props.listHeaderComponent && props.listHeaderComponent}

        {renderFlatList()}

      </ComposhFlatListContainer>

    );
  }


  function renderScroll() {
    return (

      <ComposhFlatListStyle
        style={props.style}>

        {props.listHeaderComponent && props.listHeaderComponent}

        {renderFlatList()}

      </ComposhFlatListStyle>

    );
  }



  return (

    <Container>

      {/* {dataTable?.length === 0 && props.loading && props.listLoadingComponent} */}
      {props.loading && props.listLoadingComponent}



      {!props.loading && (!dataTable || dataTable?.length === 0) && props.listEmptyComponent}



      {!props.loading && (dataTable && dataTable?.length !== 0) && (
        props.noScroll ? renderNoScroll() : renderScroll()
      )}

    </Container>

  );
};



export default ListFlat;
