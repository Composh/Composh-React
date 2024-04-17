import React from 'react';

import {
  FlatList,
} from 'react-native';

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



  return (

    <Container>

      {/* {props.data?.length === 0 && props.loading && props.listLoadingComponent} */}
      {props.loading && props.listLoadingComponent}



      {!props.loading && (!props.data || props.data?.length === 0) && props.listEmptyComponent}



      {!props.loading && props.data && props.data.length !== 0 && (
        // <ListContainer style={props.style}>
        //   {props.listHeaderComponent && props.listHeaderComponent}

        // <ComposhFlatListContent style={props.contentContainerStyle}>
        <FlatList
          style={props.style}
          contentContainerStyle={props.contentContainerStyle}
          data={props.data}
          keyExtractor={props.keyExtractor}
          ListHeaderComponent={props.listHeaderComponent}
          renderItem={({ item, index }) => props.renderItem(item, index)}
          ListFooterComponent={props.listFooterComponent}
          refreshControl={props.refreshControl}
          onEndReachedThreshold={props.onEndReachedThreshold}
        />
        //   </ComposhFlatListContent>
        // </ListContainer>
      )}

    </Container>

  );
};



export default ListFlat;
