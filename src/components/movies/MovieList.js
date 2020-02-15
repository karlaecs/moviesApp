import React from 'react';
import PropTypes from 'prop-types';
import {View, FlatList} from 'react-native';
import _ from 'lodash/fp';
import MovieItem from './MovieItem';
import {EmptyList} from '..';

import styles from './styles';

const ItemSeparatorComponent = () => <View style={styles.separator} />;
const ListHeaderComponent = () => <View style={styles.header} />;
const ListFooterComponent = () => <View style={styles.footer} />;

const MovieList = ({items, loading, match}) => (
  <FlatList
    scrollEnabled
    refreshing
    data={items}
    numColumns={3}
    // contentContainerStyle={styles.containerList}
    renderItem={({item}) => <MovieItem item={item} match={match} />}
    keyExtractor={(item, index) => index.toString()}
    ItemSeparatorComponent={ItemSeparatorComponent}
    ListHeaderComponent={ListHeaderComponent}
    ListFooterComponent={ListFooterComponent}
    ListEmptyComponent={() => <EmptyList loading={loading} />}
  />
);

MovieList.propTypes = {
  items: PropTypes.array.isRequired,
};

MovieList.defaultProps = {
  items: {},
};

export default MovieList;
