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
  const ListContainer = props.noScroll ? ComposhFlatListContainer : ComposhFlatListStyle;

  const dataTable = props.data && Array.isArray(props.data) && props.data?.length > 0 ? props.data : [];



  return (

    <Container>

      {/* {dataTable?.length === 0 && props.loading && props.listLoadingComponent} */}
      {props.loading && props.listLoadingComponent}



      {!props.loading && (!dataTable || dataTable?.length === 0) && props.listEmptyComponent}



      {!props.loading && (dataTable && dataTable?.length !== 0) && (
        <ListContainer
          style={props.style}>

          {props.listHeaderComponent && props.listHeaderComponent}

          <ComposhFlatListContent
            style={props.contentContainerStyle}>
            {dataTable?.length !== 0 && dataTable?.map((item: any, index: any) => (
              props.renderItem(item, index)
            ))}
          </ComposhFlatListContent>

        </ListContainer>
      )}

    </Container>

  );
};



export default ListFlat;
