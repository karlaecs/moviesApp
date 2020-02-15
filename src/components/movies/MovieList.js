import React from 'react';
import PropTypes from 'prop-types';
import {View, FlatList, ActivityIndicator, ScrollView} from 'react-native';
import MovieItem from './MovieItem';
import EmptyList from '../emptyList/emptyList';

import styles from './styles';
import {Colors} from '../../themes';

const ItemSeparatorComponent = () => <View style={styles.separator} />;
const ListHeaderComponent = () => <View style={styles.header} />;

const MovieList = ({
  items,
  loading,
  match,
  onEndReached,
  loadingActivityIndicator,
}) => (
  <FlatList
    scrollEnabled
    indicatorStyle="white"
    data={items}
    numColumns={3}
    renderItem={({item}) => <MovieItem item={item} match={match} />}
    keyExtractor={(item, index) => index.toString()}
    ItemSeparatorComponent={ItemSeparatorComponent}
    ListHeaderComponent={ListHeaderComponent}
    ListFooterComponent={() =>
      loadingActivityIndicator && <ActivityIndicator color={Colors.white} />
    }
    ListFooterComponentStyle={styles.footer}
    ListEmptyComponent={() => <EmptyList loading={loading} />}
    onEndReached={onEndReached}
    onEndReachedThreshold={0.5}
  />
);

MovieList.propTypes = {
  items: PropTypes.array.isRequired,
};

MovieList.defaultProps = {
  items: {},
};

export default MovieList;
