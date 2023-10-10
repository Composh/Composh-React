import React from 'react';
import Container from '../Container';

import {
  ComposhFlatListStyle,
  ComposhFlatListContent,
} from './styled';



export interface IProps {
  loading?: boolean;

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



const FlatList: React.FC<IProps> = (props: IProps) => {
  return (

    <Container>

      {/* {props.data?.length === 0 && props.loading && props.listLoadingComponent} */}
      {props.loading && props.listLoadingComponent}



      {!props.loading && (!props.data || props.data?.length === 0) && props.listEmptyComponent}



      {!props.loading && (props.data && props.data?.length !== 0) && (
        <ComposhFlatListStyle
          style={props.style}>

          {props.listHeaderComponent && props.listHeaderComponent}

          <ComposhFlatListContent
            style={props.contentContainerStyle}>
            {props.data?.length !== 0 && props.data?.map((item: any, index: any) => (
              props.renderItem(item, index)
            ))}
          </ComposhFlatListContent>

        </ComposhFlatListStyle>
      )}

    </Container>

  );
};



export default FlatList;
